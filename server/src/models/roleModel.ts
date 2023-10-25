import { openConnectionDb, closeConnectionDb } from "../config/db.ts";
import { Roles } from "../types/roleTypes.ts";

const RoleModel = {
    async findAll() {
    let connection = await openConnectionDb();
    const [roles, metadata] = await connection.query('SELECT * , BIN_TO_UUID(role_id) role_id FROM Roles');
    await closeConnectionDb(connection);
    return roles;
    },

    async findById(id: string) {
    let connection = await openConnectionDb();
    const [role, metadata] = await connection.query(`SELECT * , BIN_TO_UUID(role_id) role_id FROM Roles WHERE role_id = UUID_TO_BIN("${id}")`);
    await closeConnectionDb(connection);
    return role;
    },

    async create(role: Roles) {
    let connection = await openConnectionDb();
    let { user_type } = role;
    const [newRole, metadata] = await connection.query("INSERT INTO Roles (user_type) VALUES (?)", [user_type]);
    await closeConnectionDb(connection);
    return newRole;
    },

    async update(role: Roles, id: string) {
    let connection = await openConnectionDb();
    let { user_type } = role;
    const [updatedRole, metaData] = await connection.query('UPDATE Roles SET user_type = ? WHERE role_id = UUID_TO_BIN(?)', [user_type, id]);
    await closeConnectionDb(connection);
    return updatedRole;
    },

    async eliminateById(id: string) {
    let connection = await openConnectionDb();
    const [eliminatedRole, metaData] = await connection.query('DELETE FROM Roles WHERE role_id = UUID_TO_BIN(?)', [id]);
    await closeConnectionDb(connection);
    return eliminatedRole;
    },
};

export default RoleModel;
