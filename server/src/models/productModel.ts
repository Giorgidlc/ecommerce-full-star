import db from  '../data/db.ts';
import { DataTypes } from 'sequelize';

const ProductModel = db.define('products', {
    id:{type:DataTypes.STRING},
    product_name:{type:DataTypes.STRING},
    product_description: {type: DataTypes.STRING},
    price:{type: DataTypes.INTEGER},
    stock: {type: DataTypes.INTEGER},
    product_type_id: {type: DataTypes.STRING},
    product_discount_id: { type: DataTypes.STRING,

    },
},{
    timestamps: true
})

export default ProductModel;