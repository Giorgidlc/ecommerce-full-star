import connectionDb from "../config/db.ts";
import { Product } from "../types/ProductsTypes.ts";



const ProductModel = {

    async findAll(){

        let connection = await connectionDb();
        let [products, metadata] = await connection.query('SELECT * , BIN_TO_UUID(product_id) product_id FROM products')
        return products;

    },
    async findById(id: string){
        //SELECT * FROM  poducts WHERE  id = UUID_TO_BIN('id')
        let connection = await connectionDb();
        let [product, metadata] = await connection.query(`SELECT * , BIN_TO_UUID(product_id) product_id FROM products WHERE product_id = UUID_TO_BIN("${id}")`)
        return product;


    },
    async create(product: Product){
        //INSERT INTO products VALUES ()
        let connection = await connectionDb();
        let {product_name, product_description, price, stock, product_type_id,product_discount_id} = product;
        let [newProduct, metadata] = await connection.query("INSERT INTO products (product_name, product_description, price, stock,product_type_id, product_discount_id ) VALUES (?, ?, ?, ?, UUID_TO_BIN(?), UUID_TO_BIN(?))", [product_name, product_description, price, stock, product_type_id,product_discount_id]);
        return newProduct;

    },
//     async update(){
//         //UPDATE products SET name = ?, email = WHERE id = userId;

//     },
//     async eliminate(){
//         //DELETE * FROM products WERE id = userId

//     }
}
export default ProductModel;