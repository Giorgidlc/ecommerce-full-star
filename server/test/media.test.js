import request from 'supertest';
import { server, app } from '../out/index';
import MediaModel from '../out/models/mediaModel';
import { openConnectionDb, closeConnectionDb } from '../out/config/db';

describe('CRUD Media Test', async () => {
    let response;
    let connection = await openConnectionDb();

    describe('GET /media', () => {
        beforeEach(async () => {
        response = await request(app).get('/media').send();
    });

    test('Should return a response with status 200 and type json, when I send a Get request', async () => {
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('json');
    });

    test('Should return all media', async () => {
        expect(response.body).toBeInstanceOf(Array);
    });

    afterAll(async () => {
        server.close();
        closeConnectionDb(connection);
    });
});

    describe('POST /media', () => {
        const newMedia = {
        media_type: 'image',
        media_path: 'example.jpg',
        product_id: null,
    };

    test('Should return a response with status 201 and type json', async () => {
        const response = await request(app).post('/media').send(newMedia);
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toContain('json');
    });

    test('Should return a message media created successfully', async () => {
        const response = await request(app).post('/media').send(newMedia);
        expect(response.body.message).toContain('Media created successfully');
    });

    afterAll(async () => {
        if (newMedia && 'media_id' in newMedia) {
            const mediaId = newMedia.media_id;
            await MediaModel.delete(mediaId);
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
