import request from 'supertest';
import { server, app } from '../out/index';
import RoleModel from '../out/models/roleModel';
import { openConnectionDb, closeConnectionDb } from '../out/config/db';

describe('CRUD Roles Test',  () => {
    let response;
    let connection;

    describe('GET /roles', () => {
    beforeEach(async () => {
        response = await request(app).get('/roles').send();
        connection = await openConnectionDb();
    });

    test('Should return a response with status 200 and type json, when I send a Get request', async () => {
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('json');
    });

    test('Should return all roles', async () => {
        expect(response.body).toBeInstanceOf(Object);
    });

    afterAll(async () => {
        server.close();
        closeConnectionDb(connection);
    });
    });

    describe('POST /roles', () => {
    const newRole = {
        user_type: 'test',
    };

    const wrongRole = {
        wrong_field: 'test',
    };

    test('Should return a response with status 200 and type json', async () => {
        const response = await request(app).post('/roles').send(newRole);
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('json');
    });

    test('Should return a message role created successfully', async () => {
        const response = await request(app).post('/roles').send(newRole);
        expect(response.body.message).toContain('The role has been created successfully');
    });

    test('Should return a message insertion error if post wrong role', async () => {
        const response = await request(app).post('/roles').send(wrongRole);
        expect(response.status).toBe(500);
      expect(response.body.message).toContain("Field 'title' doesn't have a default value"); // ¿title?
    });

    afterAll(async () => {
        await RoleModel.eliminateById('test');
    });
    });

    afterAll(async () => {
    server.close();
    closeConnectionDb(connection);
    });
});
