import {openConnectionDb, closeConnectionDb} from "../config/db.ts";
import { Users } from "../types/userTypes.ts";

const UserModel = {

    async findAll(){
    
        let connection = await openConnectionDb();
        const [users, metadata] = await connection.query('SELECT * , BIN_TO_UUID(user_id) user_id FROM Users')
        await closeConnectionDb(connection);//Cerrar la conexión en cada petición, podría ser ineficiente. Investigar como y donde hacerlo.
        return users; 
    },

    async findById(id: string){
        //SELECT * FROM  Users WHERE  id = UUID_TO_BIN('id')
        let connection = await openConnectionDb();
        const [user, metadata] = await connection.query(`SELECT * , BIN_TO_UUID(user_id) user_id FROM Users WHERE user_id = UUID_TO_BIN("${id}")`)
        await closeConnectionDb(connection);
        return user;
    },

    async create(user: Users){
    
        let connection = await openConnectionDb();
        let {user_name, surname, email, user_password, paying_method_id, register_date} = user;
        const [newUser, metadata] = await connection.query("INSERT INTO Users (user_name, surname, email, user_password, paying_method_id, register_date) VALUES (?, ?, ?, ?, UUID_TO_BIN(?), ?)", [user_name, surname, email, user_password, paying_method_id, register_date]);
        await closeConnectionDb(connection);
        return newUser;
    },

    async update(user : Users, id: string){ 
    
        let connection = await openConnectionDb();
        let {user_name, surname, email, user_password, paying_method_id, register_date} = user;
        const [updatedUser, metaData] = await connection.query('UPDATE Users SET user_name = ?, surname = ?, email = ?, user_password = ?, paying_method_id = ?, register_date = ? WHERE user_id = UUID_TO_BIN(?)', [user_name, surname, email, user_password, paying_method_id, register_date, id])
        await closeConnectionDb(connection);
        return updatedUser;
    },

    async eliminateById(id: string){
    
        let connection = await openConnectionDb();
        const [eliminatedUser, metaData] = await connection.query('DELETE FROM Users WHERE user_id = UUID_TO_BIN(?)', [id]);
        await closeConnectionDb(connection);
        return eliminatedUser;
    },

    async eliminateByName(name: string){
    
        let connection = await openConnectionDb();
        const [eliminatedUsers, metaData] = await connection.query('DELETE FROM Users WHERE user_name = ?', [name]);
        await closeConnectionDb(connection);
        return eliminatedUsers;
    }
}

export default UserModel;