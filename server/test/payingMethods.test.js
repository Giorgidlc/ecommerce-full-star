import request, { Response } from 'supertest';
import { server, app } from '../out/index';
import PayingMethodsModel from '../out/models/payingMethodsModel';
import { openConnectionDb, closeConnectionDb } from '../out/config/db';

describe('CRUD Paying Methods Test', () => {
    let response;
    let newPayingMethodId;
    let connection;

    describe('GET /payingMethods', () => {
        beforeEach(async () => {
            response = await request(app).get('/payingMethods').send();
            connection = await openConnectionDb();
        });

        test('Should return a response with status 200 and type json, when I send a Get request', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test('Should return all paying methods', async () => {
            expect(response.body).toBeInstanceOf(Object);
        });

        afterAll(async () => {
            server.close();
            closeConnectionDb(connection);
        });
    });

    describe('POST /payingMethods', () => {
        const newPayingMethod = {
            paying_method_name: 'Test',
        };

        test('Should return a response with status 201 and type json', async () => {
            const createResponse = await request(app).post('/payingMethods').send(newPayingMethod);
            expect(createResponse.status).toBe(201);
            expect(createResponse.headers['content-type']).toContain('json');
           
        });
        test('Should return a message BillingInfo created successfully', async () =>{
            const response = await request(app).post('/payingMethods').send(newPayingMethod)
            expect(response.body.message).toContain("Paying method created successfully")
        })

       

        afterAll(async () => {
            if (newPayingMethodId) {
                await PayingMethodsModel.delete(newPayingMethodId);
            }
            server.close();
            closeConnectionDb(connection);
        });
    });
});
