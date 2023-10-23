import connectionDb from "../config/db.ts";
import { Product } from "../types/ProductsTypes.ts";



const ProductModel = {

    async findAll(){

        let connection = await connectionDb();
        const [products, metadata] = await connection.query('SELECT * , BIN_TO_UUID(product_id) product_id FROM products')
        return products;

    },
    async findById(id: string){
        //SELECT * FROM  poducts WHERE  id = UUID_TO_BIN('id')
        let connection = await connectionDb();
        const [product, metadata] = await connection.query(`SELECT * , BIN_TO_UUID(product_id) product_id FROM products WHERE product_id = UUID_TO_BIN("${id}")`)
        return product;


    },
    async create(product: Product){

        let connection = await connectionDb();
        let {product_name, product_description, price, stock, product_type_id,product_discount_id} = product;
        const [newProduct, metadata] = await connection.query("INSERT INTO products (product_name, product_description, price, stock,product_type_id, product_discount_id ) VALUES (?, ?, ?, ?, UUID_TO_BIN(?), UUID_TO_BIN(?))", [product_name, product_description, price, stock, product_type_id,product_discount_id]);
        return newProduct;

    },
    async update( product : Product, id: string){ 
       
        let connection = await connectionDb();
        let {product_name, product_description, price, stock, product_type_id,product_discount_id} = product;
        const [updatedProduct, metaData] = await connection.query('UPDATE products SET product_name = ?, product_description = ?, price = ?, stock = ?, product_type_id = ?, product_discount_id = ? WHERE product_id = UUID_TO_BIN(?)',[product_name, product_description, price, stock,product_type_id, product_discount_id, id])
        return updatedProduct;

    },
    async eliminateById(id: string){
        
        let connection = await connectionDb();
        const [eliminatedProduct, metaData] = await connection.query('DELETE FROM products WHERE product_id = UUID_TO_BIN(?)', [id]);
        return eliminatedProduct;


    },
    async eliminateByName(name: string){
        
        let connection = await connectionDb();
        const [eliminatedProduct, metaData] = await connection.query('DELETE FROM products WHERE product_name = ?', [name]);
        return eliminatedProduct;


    }
}
export default ProductModel;