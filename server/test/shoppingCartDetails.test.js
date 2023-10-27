import request from 'supertest';
import { server, app } from '../src/index';
import ShoppingCartDetailsModel from '../out/models/shoppingCartDetailsModel';
import { openConnectionDb, closeConnectionDb } from '../out/config/db';

describe("CRUD Shopping Cart Details Test", async () => {

    //-----------------------------------------------GET---------------------------------------------------------------------
    let response;
    let connection;

    describe("GET /shoppingCartDetails", () => {

        beforeEach(async () => {
            response = await request(app).get('/shoppingCartDetails').send();
            connection = await openConnectionDb();
        });

        test('Should return a response with status 200 and type json, when I send a Get request', async () => {
            expect(response).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test("Should return all shopping cart details", async () => {
            expect(response.body.shoppingCartDetails).toBeInstanceOf(Array);
        });

        afterAll(async () => {
            server.close();
            closeConnectionDb(connection);
        });
    });

    //-----------------------------------------------POST-------------------------------------------------------------------

    describe('POST /shoppingCartDetails', () => {
        const newShoppingCartDetail = {
            cart_details_id: "test",
            shopping_cart_id: "test_cart_id",
            product_id: "test_product_id",
            quantity: 5
        };

        const wrongShoppingCartDetail = {
            wrong_field: 'test'
        };

        test('Should return a response with status 200 and type json', async () => {
            const response = await request(app).post('/shoppingCartDetails').send(newShoppingCartDetail);
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test('Should return a message shopping cart detail created successfully', async () => {
            const response = await request(app).post('/shoppingCartDetails').send(newShoppingCartDetail);
            expect(response.body.message).toContain("The shopping cart detail has been created successfully!");
        });

        test('Should return an error message if posting a wrong shopping cart detail', async () => {
            const response = await request(app).post('/shoppingCartDetails').send(wrongShoppingCartDetail);
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'cart_details_id' doesn't have a default value");
        });

        afterAll(async () => {
            await ShoppingCartDetailsModel.eliminateById('test');
        });
    });

    afterAll(async () => {
        server.close();
        closeConnectionDb(connection);
    });
});
