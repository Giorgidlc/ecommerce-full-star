// import db from  '../data/db.ts';
// import { DataTypes } from 'sequelize';

// const ProductModel = db.define('products', {
//     product_id: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         allowNull: false,
//         autoIncrement: false,
//         primaryKey: true,
//       }, 
//     product_name:{type:DataTypes.STRING},
//     product_description: {type: DataTypes.STRING},
//     price:{type: DataTypes.INTEGER},
//     stock: {type: DataTypes.INTEGER},
//     product_type_id: {type: DataTypes.STRING},
//     product_discount_id: { type: DataTypes.STRING,

//     },
// },{
//     timestamps: false
// })

// export default ProductModel;

import db from '../data/db.ts';
import { DataTypes } from 'sequelize';

const ProductModel = db.define('products', {
    product_id: {
        type: DataTypes.CHAR(36),
        defaultValue: db.fn('UUID_TO_BIN', db.fn('UUID')),
        allowNull: false,
        primaryKey: true,
    },
    product_name: { type: DataTypes.STRING },
    product_description: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    stock: { type: DataTypes.INTEGER },
    product_type_id: { type: DataTypes.STRING },
    product_discount_id: { type: DataTypes.STRING },
}, {
    timestamps: false
});

export function createProduct(productData: any) {
    return ProductModel.create({
        ...productData,
        product_id: db.fn('UUID_TO_BIN', productData.product_id)
    });
}

export default ProductModel;
