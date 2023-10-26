import { openConnectionDb, closeConnectionDb } from "../config/db";
import { ShoppingCartsDetails } from "../types/shoppingCartDetailsTypes";


const ShoppingCartDetailsModel = {

    async findAll() {

        let connection = await openConnectionDb();
        const [shoppingCartDetails, metadata] = await connection.query('SELECT * , BIN_TO_UUID(cart_details_id) cart_details_id FROM Shopping_Cart_Details');
        await closeConnectionDb(connection);
        return shoppingCartDetails;
    },

    async findById(id: string) {
        let connection = await openConnectionDb();
        const [shoppingCartDetail, metadata] = await connection.query(`SELECT * , BIN_TO_UUID(cart_details_id) cart_details_id FROM Shopping_Cart_Details WHERE cart_details_id = UUID_TO_BIN("${id}")`);
        await closeConnectionDb(connection);
        return shoppingCartDetail;
    },

    async create(shoppingCartDetail: ShoppingCartsDetails) {

        let connection = await openConnectionDb();
        let { shopping_cart_id, product_id, quantity } = shoppingCartDetail;
        const [newShoppingCartDetail, metadata] = await connection.query("INSERT INTO Shopping_Cart_Details (cart_details_id, shopping_cart_id, product_id, quantity) VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?), ?)", [shopping_cart_id, product_id, quantity]);
        await closeConnectionDb(connection);
        return newShoppingCartDetail;
    },

    async update(shoppingCartDetail: ShoppingCartsDetails, id: string) {
        let connection = await openConnectionDb();
        let { shopping_cart_id, product_id, quantity } = shoppingCartDetail;

        // Utilizar una expresión ternaria para validar los campos requeridos
        const isValidData = shopping_cart_id && product_id !== null && quantity !== null;

        // Lanzar una excepción si los datos no son válidos
        if (!isValidData) {
            throw new Error("Valores inválidos para shopping_cart_id, product_id o quantity.");
        }

        // Si los datos son válidos, ejecutar la consulta de actualización
        const [updatedShoppingCartDetail, metadata] = await connection.query("UPDATE Shopping_Cart_Details SET shopping_cart_id = UUID_TO_BIN(?), product_id = UUID_TO_BIN(?), quantity = ? WHERE cart_details_id = UUID_TO_BIN(?)", [shopping_cart_id, product_id, quantity, id]);
        await closeConnectionDb(connection);
        return updatedShoppingCartDetail;
    },

    async eliminateById(id: string) {
        let connection = await openConnectionDb();
        const [eliminatedShoppingCartDetail, metaData] = await connection.query('DELETE FROM Shopping_Cart_Details WHERE cart_details_id = UUID_TO_BIN(?)', [id]);
        await closeConnectionDb(connection);
        return eliminatedShoppingCartDetail;
    },
}

export default ShoppingCartDetailsModel;
