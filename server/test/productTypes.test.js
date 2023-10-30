import request, { Response } from 'supertest';
import { server, app } from '../out/index';
import ProductTypesModel from '../out/models/productTypesModel';
import { openConnectionDb, closeConnectionDb } from '../out/config/db';

describe('CRUD Product Types Test',  () => {
    let response;
    let newProductTypeId;
    let connection;
    describe('GET /productTypes', () => {
        beforeEach(async () => {
            response = await request(app).get('/productTypes').send();
            connection = await openConnectionDb();

        });

        test('Should return a response with status 200 and type json, when I send a Get request', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test('Should return all product types', async () => {
            expect(response.body).toBeInstanceOf(Object);
        });

        afterAll(async () => {
            server.close();
            closeConnectionDb(connection);
        });
    });

    describe('POST /productTypes', () => {
        const newProductType = {
            product_type: 'Test',
        };

        test('Should return a response with status 201 and type json', async () => {
            const createResponse = await request(app).post('/productTypes').send(newProductType);
            expect(createResponse.status).toBe(201);
            expect(createResponse.headers['content-type']).toContain('json');
        });
        test('Should return a message product created successfully', async () =>{
            const response = await request(app).post('/productType').send(newProductType)
            expect(response.body.message).toContain("The product type has been created successfully")
        })

     

        afterAll(async () => {
            if (newProductTypeId) {
                await ProductTypesModel.deleteByType('Test');
            }
            server.close();
            closeConnectionDb(connection);
        });
    });
});
