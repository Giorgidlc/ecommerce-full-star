import request, { Response } from 'supertest';
import { server, app } from '../src/index.ts';
import ProductTypesModel from '../src/models/productTypesModel.ts';
import { openConnectionDb, closeConnectionDb } from '../src/config/db.ts';

describe('CRUD Product Types Test', async () => {
    let response: Response;
    let newProductTypeId: string;
    let connection = await openConnectionDb();

    describe('GET /productTypes', () => {
        beforeEach(async () => {
            response = await request(app).get('/productTypes').send();
        });

        test('Should return a response with status 200 and type json, when I send a Get request', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test('Should return all product types', async () => {
            expect(response.body).toBeInstanceOf(Array);
        });

        afterAll(async () => {
            server.close();
            closeConnectionDb(connection);
        });
    });

    describe('POST /productTypes', () => {
        const newProductType = {
            product_type: 'Test Product Type',
        };

        test('Should return a response with status 201 and type json', async () => {
            const createResponse = await request(app).post('/productTypes').send(newProductType);
            expect(createResponse.status).toBe(201);
            expect(createResponse.headers['content-type']).toContain('json');
            newProductTypeId = createResponse.body.productType.types_id;
        });

        test('Should return a message product type created successfully', async () => {
            expect(newProductTypeId).toBeTruthy();
        });

        afterAll(async () => {
            if (newProductTypeId) {
                await ProductTypesModel.delete(newProductTypeId);
            }
            server.close();
            closeConnectionDb(connection);
        });
    });
});