import request from 'supertest';
import { server, app } from '../src/index.ts';
import TelephonesModel from '../src/models/telephonesModel.ts';
import { openConnectionDb, closeConnectionDb } from '../src/config/db.ts';

describe('CRUD Telephones Test', async () => {
    let response: any;
    let connection = await openConnectionDb();

describe('GET /telephones', () => {
    beforeEach(async () => {
        response = await request(app).get('/telephones').send();
    });

    test('Should return a response with status 200 and type json, when I send a Get request', async () => {
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('json');
    });

    test('Should return all telephones', async () => {
        expect(response.body).toBeInstanceOf(Array);
    });

    afterAll(async () => {
        server.close();
        closeConnectionDb(connection);
    });
});

describe('POST /telephones', () => {
    const newPhone = {
        phone: 'Test Phone',
        user_id: 'user_id_here',
    };

    test('Should return a response with status 201 and type json', async () => {
        const response = await request(app).post('/telephones').send(newPhone);
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toContain('json');
    });

    test('Should return a message telephone created successfully', async () => {
        const response = await request(app).post('/telephones').send(newPhone);
        expect(response.body.message).toContain('Telephone created successfully');
    });

    afterAll(async () => {
        if (newPhone && 'phone_id' in newPhone) {
            const phoneId: string = newPhone.phone_id as string;
            await TelephonesModel.delete(phoneId);
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

