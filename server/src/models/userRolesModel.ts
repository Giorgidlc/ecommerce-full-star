import { openConnectionDb, closeConnectionDb } from '../config/db.ts';

const UserRolesModel = {
    async findAll() {
        let connection = await openConnectionDb();
        const [userRoles, metadata] = await connection.query('SELECT * FROM Users_Roles');
        await closeConnectionDb(connection);
        return userRoles;
    },

    async create(userRoleId: string, userId: string) {
        let connection = await openConnectionDb();
        const [newUserRole, metadata] = await connection.query('INSERT INTO Users_Roles (role_id, user_id) VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?))', [userRoleId, userId]);
        await closeConnectionDb(connection);
        return newUserRole;
    },

    async delete(userRoleId: string, userId: string) {
        let connection = await openConnectionDb();
        const [deletedUserRole, metadata] = await connection.query('DELETE FROM Users_Roles WHERE role_id = UUID_TO_BIN(?) AND user_id = UUID_TO_BIN(?)', [userRoleId, userId]);
        await closeConnectionDb(connection);
        return deletedUserRole;
    },
};

export default UserRolesModel;
