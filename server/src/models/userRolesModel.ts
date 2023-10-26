import db from '../data/db.ts';
import { DataTypes } from 'sequelize';



const UserRolesModel = db.define('Users_Roles', {
    role_id: {
        type: DataTypes.BLOB,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.BLOB,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false
});



export default UserRolesModel;

