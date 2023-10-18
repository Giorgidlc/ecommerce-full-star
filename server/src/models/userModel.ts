import db from  '../database/db.js';
import { DataTypes } from 'sequelize';

const ProductModel = db.define('products', {
    id:{type:DataTypes.STRING},
    user_name:{type:DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    email:{type: DataTypes.STRING},
    user_password: {type: DataTypes.STRING},
    paying_method_id: {type: DataTypes.STRING},
    register_date: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.NOW   
    },
},{
    timestamps: true
})

export default ProductModel;