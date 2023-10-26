import request from 'supertest';
import { server, app } from '../src/index.ts';
import DiscountsModel from '../src/models/discountsModel.ts';
import { openConnectionDb, closeConnectionDb } from '../src/config/db.ts';

describe('CRUD Discounts Test', async () => {
    let response: any;
    let connection = await openConnectionDb();

    describe('GET /discounts', () => {
        beforeEach(async () => {
        response = await request(app).get('/discounts').send();
    });

    test('Should return a response with status 200 and type json, when I send a Get request', async () => {
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('json');
    });

    test('Should return all discounts', async () => {
        expect(response.body).toBeInstanceOf(Array);
    });

    afterAll(async () => {
        server.close();
        closeConnectionDb(connection);
    });
    });

    describe('POST /discounts', () => {
        const newDiscount = {
        discount: 'Test Discount',
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
        if (newDiscount && 'discount_id' in newDiscount) {
            const discountId: string = newDiscount.discount_id as string;
            await DiscountsModel.delete(discountId);
        } else {
            throw new Error('Invalid discount object');
        }
    });
    });

    afterAll(async () => {
    server.close();
    closeConnectionDb(connection);
    });
});
