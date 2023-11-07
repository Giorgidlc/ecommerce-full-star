import {openConnectionDb, closeConnectionDb} from "../config/db";
import { Products } from "../types/productsTypes";

const ProductModel = {

    async findAll():Promise<Products[]| null>{
    
        let connection = await openConnectionDb();
        const [products, metadata] = await connection.query('SELECT BIN_TO_UUID(product_id) AS product_id, product_name, product_description, price, stock, BIN_TO_UUID(product_type_id) AS product_type_id, BIN_TO_UUID(product_discount_id) AS product_discount_id FROM Products;')
        await closeConnectionDb(connection);
        return products as Products[];
    },

    async findById(id: string): Promise<Products | null> {
        let connection = await openConnectionDb();
        const [product, metadata] = await connection.query(`SELECT BIN_TO_UUID(product_id) AS product_id, product_name, product_description, price, stock, BIN_TO_UUID(product_type_id) AS product_type_id, BIN_TO_UUID(product_discount_id) AS product_discount_id FROM Products WHERE product_id = UUID_TO_BIN("${id}")`)
        await closeConnectionDb(connection);
        return (product as Products[])[0] || null;
    },

    async create(product: Products): Promise<Products | null> {
        const connection = await openConnectionDb();
        const { product_name, product_description, price, stock, product_type_id, product_discount_id } = product;
        const [newProduct, metadata] = await connection.query(
            "INSERT INTO Products (product_name, product_description, price, stock, product_type_id, product_discount_id) VALUES (?, ?, ?, ?, UUID_TO_BIN(?), UUID_TO_BIN(?))",
            [product_name, product_description, price, stock, product_type_id, product_discount_id]
        );
        await closeConnectionDb(connection);
        const newProductAsProducts = newProduct as unknown as Products;
        if (typeof newProductAsProducts === 'object') {
            return newProductAsProducts;
        } else {
            return null;
        }
    },

    async update(product : Products, id: string): Promise<Products | null>{ 
    
        let connection = await openConnectionDb();
        let {product_name, product_description, price, stock, product_type_id, product_discount_id} = product;
        const [updatedProduct, metaData] = await connection.query('UPDATE Products SET product_name = ?, product_description = ?, price = ?, stock = ?, product_type_id = ?, product_discount_id = ? WHERE product_id = UUID_TO_BIN(?)', [product_name, product_description, price, stock,product_type_id, product_discount_id, id])
        await closeConnectionDb(connection);
        return (updatedProduct as Products[])[0] || null;
    },

    async eliminateById(id: string): Promise<Products| null>{
        
        let connection = await openConnectionDb();
        const [eliminatedProduct, metaData] = await connection.query('DELETE FROM Products WHERE product_id = UUID_TO_BIN(?)', [id]);
        await closeConnectionDb(connection);
        return (eliminatedProduct as Products[])[0]|| null;
    },

    async eliminateByName(name: string):Promise<Products| null>{
        
        let connection = await openConnectionDb();
        const [eliminatedProduct, metaData] = await connection.query('DELETE FROM Products WHERE product_name = ?', [name]);
        await closeConnectionDb(connection);
        return (eliminatedProduct as Products[])[0]|| null;
    }
}

export default ProductModel;