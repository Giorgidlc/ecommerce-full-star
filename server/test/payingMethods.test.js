import request, { Response } from 'supertest';
import { server, app } from '../out/index';
import PayingMethodsModel from '../out/models/payingMethodsModel';
import { openConnectionDb, closeConnectionDb } from '../out/config/db';

describe('CRUD Paying Methods Test', async () => {
    let response;
    let newPayingMethodId;
    let connection = await openConnectionDb();

    describe('GET /payingMethods', () => {
        beforeEach(async () => {
            response = await request(app).get('/payingMethods').send();
        });

        test('Should return a response with status 200 and type json, when I send a Get request', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test('Should return all paying methods', async () => {
            expect(response.body).toBeInstanceOf(Array);
        });

        afterAll(async () => {
            server.close();
            closeConnectionDb(connection);
        });
    });

    describe('POST /payingMethods', () => {
        const newPayingMethod = {
            paying_method_name: 'Test Payment Method',
        };

        test('Should return a response with status 201 and type json', async () => {
            const createResponse = await request(app).post('/payingMethods').send(newPayingMethod);
            expect(createResponse.status).toBe(201);
            expect(createResponse.headers['content-type']).toContain('json');
            newPayingMethodId = createResponse.body.newPayingMethod.paying_method_id;
        });

        test('Should return a message paying method created successfully', async () => {
            expect(newPayingMethodId).toBeTruthy();
        });

        afterAll(async () => {
            if (newPayingMethodId) {
                await PayingMethodsModel.delete(newPayingMethodId);
            }
            server.close();
            closeConnectionDb(connection);
        });
    });
});
