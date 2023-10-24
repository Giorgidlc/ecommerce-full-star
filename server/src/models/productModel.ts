import {openConnectionDb, closeConnectionDb} from "../config/db.ts";
import { Product } from "../types/productsTypes.ts";



const ProductModel = {

    async findAll(){

        let connection = await openConnectionDb();
        const [products, metadata] = await connection.query('SELECT * , BIN_TO_UUID(product_id) product_id FROM Products')
        await closeConnectionDb(connection);//Cerrar la conexión en cada petición, podría ser ineficiente. Investigar como y donde hacerlo.
        return products;
        
    },

    async findById(id: string){
        //SELECT * FROM  poducts WHERE  id = UUID_TO_BIN('id')
        let connection = await openConnectionDb();
        const [product, metadata] = await connection.query(`SELECT * , BIN_TO_UUID(product_id) product_id FROM products WHERE product_id = UUID_TO_BIN("${id}")`)
        await closeConnectionDb(connection);
        return product;


    },
    async create(product: Product){

        let connection = await openConnectionDb();
        let {product_name, product_description, price, stock, product_type_id,product_discount_id} = product;
        const [newProduct, metadata] = await connection.query("INSERT INTO products (product_name, product_description, price, stock,product_type_id, product_discount_id ) VALUES (?, ?, ?, ?, UUID_TO_BIN(?), UUID_TO_BIN(?))", [product_name, product_description, price, stock, product_type_id,product_discount_id]);
        await closeConnectionDb(connection);
        return newProduct;

    },
    async update( product : Product, id: string){ 
       
        let connection = await openConnectionDb();
        let {product_name, product_description, price, stock, product_type_id,product_discount_id} = product;
        const [updatedProduct, metaData] = await connection.query('UPDATE products SET product_name = ?, product_description = ?, price = ?, stock = ?, product_type_id = ?, product_discount_id = ? WHERE product_id = UUID_TO_BIN(?)',[product_name, product_description, price, stock,product_type_id, product_discount_id, id])
        await closeConnectionDb(connection);
        return updatedProduct;

    },
    async eliminateById(id: string){
        
        let connection = await openConnectionDb();
        const [eliminatedProduct, metaData] = await connection.query('DELETE FROM products WHERE product_id = UUID_TO_BIN(?)', [id]);
        await closeConnectionDb(connection);
        return eliminatedProduct;


    },
    async eliminateByName(name: string){
        
        let connection = await openConnectionDb();
        const [eliminatedProducts, metaData] = await connection.query('DELETE FROM products WHERE product_name = ?', [name]);
        await closeConnectionDb(connection);
        return eliminatedProducts;

    }
}
export default ProductModel;