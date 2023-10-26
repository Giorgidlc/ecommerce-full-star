import {openConnectionDb, closeConnectionDb} from "../config/db.ts";
import { ShoppingCarts } from "../types/shoppingCartsTypes.ts";

const ShoppingCartModel = {

    async findAll(){
    
        let connection = await openConnectionDb();
        const [shoppingCarts, metadata] = await connection.query('SELECT * , BIN_TO_UUID(shoppingCart_id) shoppingCart_id FROM ShoppingCarts')
        await closeConnectionDb(connection);//Cerrar la conexión en cada petición, podría ser ineficiente. Investigar como y donde hacerlo.
        return shoppingCarts; 
    },

    async findById(id: string){
        //SELECT * FROM  ShoppingCarts WHERE  id = UUID_TO_BIN('id')
        let connection = await openConnectionDb();
        const [shoppingCart, metadata] = await connection.query(`SELECT * , BIN_TO_UUID(shoppingCart_id) shoppingCart_id FROM ShoppingCarts WHERE shoppingCart_id = UUID_TO_BIN("${id}")`)
        await closeConnectionDb(connection);
        return shoppingCart;
    },

    async create(shoppingCart: ShoppingCarts){
    
        let connection = await openConnectionDb();
        let {shopping_cart_id, user_id, paying_method_id, total} = shoppingCart;
        const [newShoppingCart, metadata] = await connection.query("INSERT INTO Shopping_Carts (shopping_cart_id, user_id, paying_method_id, total) VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?), ?)", [shopping_cart_id, user_id, paying_method_id, total]);
        await closeConnectionDb(connection);
        return newShoppingCart;
    },

    async update(shoppingCart : ShoppingCarts, id: string){ 
    
        let connection = await openConnectionDb();
        let {shopping_cart_id, user_id, paying_method_id, total} = shoppingCart;
        // Utilizar una expresión ternaria para validar los campos requeridos
        const isValidData = user_id && paying_method_id !== null && total !== null;
        // Lanzar una excepción si los datos no son válidos
        if (!isValidData) {
            throw new Error("Valores inválidos para user_id, paying_method_id o total.");
        }
        // Si los datos son válidos, ejecutar la consulta de inserción
        const [newShoppingCart, metadata] = await connection.query("INSERT INTO Shopping_Carts (shopping_cart_id, user_id, paying_method_id, total) VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?), ?)", [shopping_cart_id, user_id, paying_method_id, total]);
        await closeConnectionDb(connection);
        return newShoppingCart;
    },

    async eliminateById(id: string){
    
        let connection = await openConnectionDb();
        const [eliminatedShoppingCart, metaData] = await connection.query('DELETE FROM ShoppingCarts WHERE shoppingCart_id = UUID_TO_BIN(?)', [id]);
        await closeConnectionDb(connection);
        return eliminatedShoppingCart;
    },

    async eliminateByName(name: string){
    
        let connection = await openConnectionDb();
        const [eliminatedShoppingCarts, metaData] = await connection.query('DELETE FROM ShoppingCarts WHERE user_id = UUID_TO_BIN(?)', [name]);
        await closeConnectionDb(connection);
        return eliminatedShoppingCarts;
    }
}

export default ShoppingCartModel;