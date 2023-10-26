import {openConnectionDb, closeConnectionDb} from "../config/db";
import { Product } from "../types/productsTypes";

const ProductModel = {

    async findAll(){
    
        let connection = await openConnectionDb();
        const [products, metadata] = await connection.query('SELECT BIN_TO_UUID(product_id) AS product_id, product_name, product_description, price, stock, BIN_TO_UUID(product_type_id) AS product_type_id, BIN_TO_UUID(product_discount_id) AS product_discount_id FROM Products;')
        await closeConnectionDb(connection);//Cerrar la conexión en cada petición, podría ser ineficiente. Investigar como y donde hacerlo.
        return products;
    },

    async findById(id: string){
        //SELECT * FROM  Products WHERE  id = UUID_TO_BIN('id')
        let connection = await openConnectionDb();
        const [product, metadata] = await connection.query(`SELECT * , BIN_TO_UUID(product_id) product_id FROM Products WHERE product_id = UUID_TO_BIN("${id}")`)
        await closeConnectionDb(connection);
        return product;
    },
    async create(product: Product){
    
        let connection = await openConnectionDb();
        let {product_name, product_description, price, stock, product_type_id, product_discount_id} = product;
        const [newProduct, metadata] = await connection.query("INSERT INTO Products (product_name, product_description, price, stock, product_type_id, product_discount_id) VALUES (?, ?, ?, ?, UUID_TO_BIN(?), UUID_TO_BIN(?))", [product_name, product_description, price, stock, product_type_id, product_discount_id]);
        await closeConnectionDb(connection);
        return newProduct;

    },
    async update(product : Product, id: string){ 
    
        let connection = await openConnectionDb();
        let {product_name, product_description, price, stock, product_type_id, product_discount_id} = product;
        const [updatedProduct, metaData] = await connection.query('UPDATE Products SET product_name = ?, product_description = ?, price = ?, stock = ?, product_type_id = ?, product_discount_id = ?, WHERE product_id = UUID_TO_BIN(?)',[product_name, product_description, price, stock,product_type_id, product_discount_id, id])
        await closeConnectionDb(connection);
        return updatedProduct;

    },
    async eliminateById(id: string){
        
        let connection = await openConnectionDb();
        const [eliminatedProduct, metaData] = await connection.query('DELETE FROM Products WHERE product_id = UUID_TO_BIN(?)', [id]);
        await closeConnectionDb(connection);
        return eliminatedProduct;


    },
    async eliminateByName(name: string){
        
        let connection = await openConnectionDb();
        const [eliminatedProducts, metaData] = await connection.query('DELETE FROM Products WHERE product_name = ?', [name]);
        await closeConnectionDb(connection);
        return eliminatedProducts;

    },
    async addProductType(productId:string, type: string){
        let connection = await openConnectionDb()
        const [addForeignKey, metadata] = await connection.query('UPDATE Products SET product_type_id = (SELECT UUID_FROM_BIN(types_id) FROM Product_Types WHERE product_type = ?)WHERE product_id = UUID_TO_BIN(?)',[type, productId])
        await closeConnectionDb(connection);
        return addForeignKey;                                       
    }
}
export default ProductModel;