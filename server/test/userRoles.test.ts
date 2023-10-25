import request, { Response } from 'supertest';
import { server, app } from '../src/index.ts';
import UserRolesModel from '../src/models/userRolesModel.ts';
import { openConnectionDb, closeConnectionDb } from '../src/config/db.ts';

describe('CRUD User Roles Test', async () => {
    let response: Response;
    let connection = await openConnectionDb();

    describe('GET /userRoles', () => {
        beforeEach(async () => {
        response = await request(app).get('/userRoles').send();
    });

    test('Should return a response with status 200 and type json, when I send a Get request', async () => {
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('json');
    });

    test('Should return all user roles', async () => {
        expect(response.body).toBeInstanceOf(Array);
    });

    afterAll(async () => {
        server.close();
        closeConnectionDb(connection);
    });
    });

    describe('POST /userRoles', () => {
        const newUserRole = {
            role_id: 'role_id_here',
            user_id: 'user_id_here',
    };

    test('Should return a response with status 200 and type json', async () => {
        const response = await request(app).post('/userRoles').send(newUserRole);
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toContain('json');
    });

    test('Should return a message user role created successfully', async () => {
        const response = await request(app).post('/userRoles').send(newUserRole);
        expect(response.body.message).toContain('User role created successfully');
    });

    afterAll(async () => {
        await UserRolesModel.delete(newUserRole.role_id, newUserRole.user_id);
    });
    });

    afterAll(async () => {
    server.close();
    closeConnectionDb(connection);
    });
});
