import request from 'supertest';
import { server, app } from '../out/index';
import ShoppingCartModel from '../out/models/shoppingCartModel';
import { openConnectionDb, closeConnectionDb } from '../out/config/db';

describe("CRUD Shopping Carts Test", async () => {


//-----------------------------------------------GET---------------------------------------------------------------------
    let response;
    let connection = await openConnectionDb();

    describe("GET /shoppingCarts", () => {

        beforeEach(async () => {
            response = await request(app).get('/shoppingCarts').send();
        });

        test('Should return a response with status 200 and type json, when I send a Get request', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test("Should return all shopping carts", async () => {
            expect(response.body.shoppingCarts).toBeInstanceOf(Array);
        });

        afterAll(async () => {
            server.close();
            closeConnectionDb(connection);
        });
    });

//-----------------------------------------------POST-------------------------------------------------------------------

    describe('POST /shoppingCarts', () => {
        const newShoppingCart = {
            shopping_cart_id: "test",
            user_id: "test",
            paying_method_id: "test",
            total: 100
        };

        const wrongShoppingCart = {
            wrong_field: 'test'
        };

        test('Should return a response with status 200 and type json', async () => {
            const response = await request(app).post('/shoppingCarts').send(newShoppingCart);
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test('Should return a message shopping cart created successfully', async () => {
            const response = await request(app).post('/shoppingCarts').send(newShoppingCart);
            expect(response.body.message).toContain("The shopping cart has been created successfully!");
        });

        test('Should return an error message if post a wrong shopping cart', async () => {
            const response = await request(app).post('/shoppingCarts').send(wrongShoppingCart);
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'title' doesn't have a default value");
        });

        afterAll(async () => {
            await ShoppingCartModel.eliminateById('test');
        });
    });

    afterAll(async () => {
        server.close();
        closeConnectionDb(connection);
    });
});
