import request from 'supertest';
import { server, app } from '../out/index';
import DiscountsModel from '../out/models/discountsModel';
import { openConnectionDb, closeConnectionDb } from '../out/config/db';

describe('CRUD Discounts Test',  () => {
    let response;
    let connection;

    describe('GET /discounts', () => {
        beforeEach(async () => {
        response = await request(app).get('/discounts').send();
        connection = await openConnectionDb();
        });
    
        test('Should return a response with status 200 and type json, when I send a Get request', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test('Should return all discounts', async () => {
            expect(response.body).toBeInstanceOf(Object);
        });

        afterAll(async () => {
            server.close();
            closeConnectionDb(connection);
        });
       
    });


    describe('POST /discounts', () => {
        const newDiscount = {
        discount: 'Test',
        };
        const wrongDiscount = {
            discount: 5,
        };

        test('Should return a response with status 201 and type json', async () => {
            const response = await request(app).post('/discounts').send(newDiscount);
            expect(response.status).toBe(201);
            expect(response.headers['content-type']).toContain('json');
            });

        test('Should return a message discount created successfully', async () => {
            const response = await request(app).post('/discounts').send(newDiscount);
            expect(response.body.message).toContain('Discount created successfully');
        });
        afterAll(async () => {
            await DiscountsModel.eliminateByDiscount('Test');
        }) 

    })

    afterAll(async () => {
    server.close();
    closeConnectionDb(connection);
    });

})