import db from '../data/db.ts';
import { DataTypes } from 'sequelize';

const UserModel = db.define('Users', {
    user_id: {
        type: DataTypes.BLOB,
        defaultValue: db.fn('UUID'),
        allowNull: false,
        primaryKey: true,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paying_method_id: {
        type: DataTypes.BLOB
    },
    register_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

export default UserModel;
