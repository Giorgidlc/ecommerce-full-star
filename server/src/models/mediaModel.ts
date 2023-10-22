import db from '../data/db.ts';
import { DataTypes } from 'sequelize';

const MediaModel = db.define('media', {
    media_id: {
        type: DataTypes.CHAR(36),
        defaultValue: db.fn('UUID_TO_BIN', db.fn('UUID')),
        allowNull: false,
        primaryKey: true,
    },
    media_type: { type: DataTypes.ENUM('image', 'video'), allowNull: false },
    media_path: { type: DataTypes.STRING, allowNull: false },
    product_id: { type: DataTypes.CHAR(36), allowNull: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    timestamps: false
});

export default MediaModel;
