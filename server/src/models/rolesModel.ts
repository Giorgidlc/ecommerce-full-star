import db from '../data/db.ts';
import { DataTypes } from 'sequelize';


const RolesModel = db.define('Roles', {
    role_id: {
        type: DataTypes.BLOB,
        primaryKey: true
    },
    user_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

export default RolesModel;
