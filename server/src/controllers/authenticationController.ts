import { v4 as uuidv4 } from 'uuid'; 
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User from "../models/usersModel.ts";
import UserRolesModel from "../models/userRolesModel.ts";
import RolesModel from "../models/rolesModel.ts";
import { tokenSecret, tokenExpiration } from "../config/index.ts";
import db from '../data/db.ts';

const saltRounds = 10;

async function setTemporaryPassword(email: string, tempPassword: string) {
    // Hash the temporary password
    const hashedPassword = await bcrypt.hash(tempPassword, saltRounds);
    
    // Update the database
    try {
        await User.update({ user_password: hashedPassword }, { where: { email } });
        console.log("Password updated successfully for:", email);
    } catch (error) {
        console.error("Error updating password:", error);
    }
}

setTemporaryPassword('virF5@gmail.com', 'passwordTemporal123');


const authController = {
        register: async (req: Request, res: Response) => {
        const { user_name, surname, email, user_password } = req.body;

        console.log("user_name:", user_name);
        console.log("surname:", surname);
        console.log("email:", email);
        console.log("user_password:", user_password);

        if (!user_name || !surname || !email || !user_password) {
            return res.status(400).send("Missing required fields");
        }

        try {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).send("Email already in use");
            }

            const hashedPassword = await bcrypt.hash(user_password, saltRounds);
            const role = await RolesModel.findOne({ where: { user_type: "user" } });
            


            if (!role) {
                return res.status(500).send("Role not found");
            }

            const newUUIDString = uuidv4();
            const newUUIDBinary = db.fn('UUID_TO_BIN', newUUIDString);

            console.log("Generated UUID String:", newUUIDString);
            console.log("Converted UUID to Binary:", newUUIDBinary);


            console.log("newUUID:", newUUIDBinary);

            const newUser = await User.create({
                user_id: newUUIDBinary,
                user_name,
                surname,
                email,
                user_password: hashedPassword,
                paying_method_id: null, 
                register_date: new Date(), 
            });

            console.log("newUser:", newUser);

            await UserRolesModel.create({
                role_id: role.role_id,
                user_id: newUUIDBinary
            });

            return res.status(201).json({ message: "User Created" });

        } catch (error: any) {
            console.error("Error:", error);
            return res.status(500).json({ error: error.message });
        }
    },

    login: async (req: Request, res: Response) => {
        const { email, user_password } = req.body;

        if (!email || !user_password) {
            return res.status(400).send("Missing email or password");
        }

        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(403).send('Invalid Email or Password');
            }

            const match = await bcrypt.compare(user_password, user.user_password);

            if (!match) {
                return res.status(403).send('Invalid Email or Password');
            }

            const token = jwt.sign({ userId: user.user_id }, tokenSecret, { expiresIn: tokenExpiration });
            return res.status(200).json({ token });

        } catch (error: any) {
            console.error("Error:", error);
            return res.status(500).json({ error: error.message });
        }
    },

    getProfile: async (req: Request, res: Response) => {
        console.log(req.userId);
        if (!req.userId) {
            return res.status(403).send('User ID missing');
        }
    
        try {
            
            const userBuffer = Buffer.from(req.userId.data);
            const user = await User.findByPk(userBuffer);

            if (!user) {
                return res.status(404).send('User not found');
            }
    
            // Excluir user_password al enviar respuesta
            const { user_password, ...userWithoutPassword } = user.toJSON();
            res.status(200).json(userWithoutPassword);
    
        } catch (error: any) {
            console.error("Error:", error);
            return res.status(500).json({ error: error.message });
        }
    }
    
};

export default authController;



