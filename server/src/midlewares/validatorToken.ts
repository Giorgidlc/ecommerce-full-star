import 'dotenv/config';
import { tokenSecret } from "../config/index";
import { UserModel, UserRolesModel, RolesModel } from "../models/associatons.ts";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyToken = async (req: any, res: any, next: any) => {
    try {
        const authHeader = req.headers.authorization; 
        if (!authHeader) {
            return res.status(403).json({ message: "Token not provided" });
        }
        
        const token = authHeader.split(' ')[1];
        
        if (!token) {
            return res.status(403).json({ message: "Token not provided" });
        }

        const decodedToken = jwt.verify(token, tokenSecret) as JwtPayload;
        console.log(decodedToken);
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
}

export const isAdmin = async (req: any, res: any, next: any) => {
    try {
        const userBuffer = Buffer.from(req.userId.data);
        
        const userRoleMapping: any = await UserRolesModel.findOne({ where: { user_id: userBuffer } });

        if (!userRoleMapping) {
            return res.status(403).json({ error: "Access denied" });
        }

        const role: any = await RolesModel.findByPk(userRoleMapping.role_id);

        if (role && role.user_type === "admin") {
            next();
        } else {
            res.status(403).json({ error: "Access denied" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

