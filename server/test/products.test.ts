import request from "supertest";
import app from '../src/index.ts';

type HttpProductResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body: {
        products: T[];
    };
};
type Products = {
    id: string;
    user_name: string;
    surname: string;
    email: string;
    user_password: string;
    paying_method_id: string;
    register_date: string;
};
describe("CRUD Test", () => {

    //-----------------------------------------------GET----------------------------------------------------------
    describe("GET /Products", () => {
        let response: HttpProductResponse<Products>;
        beforeEach(async () => {
            response = await request(app).get('/products').send();
        });
        test('should return a response with status 200 and type json, when I send a Get request', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });
        test("Should return all products", async () => {
            expect(response.body).toBeInstanceOf(Array);
        });
    });

    //-----------------------------------------------POST----------------------------------------------------------
    describe('POST /products', () => {
        const newProductsModel = {
            title: "test",
            writer: "test",
            product_description: "test",
        };
        const wrongProductsModel = {
            wrong_field: 'test',
        };
        test('Should return a response with status 200 and type json', async () => {
            const response = await request(app).post('/products').send(newProductsModel);
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });
        test('should return a message product created successfully', async () => {
            const response = await request(app).post('/products').send(newProductsModel);
            expect(response.body.message).toContain("The product has been created successfully!");
        });
        test('should return a message insertion error If post wrong product ', async () => {
            const response = await request(app).post('/products').send(wrongProductsModel);
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'title' doesn't have a default value");
        });
        afterAll(async () => {
            await ProductsModel.destroy({ where: { title: 'test' } });
        });
    });
    afterAll(() => {
        server.close();
        db.close();
    });

    //-----------------------------------------------PATCH----------------------------------------------------------
    describe('PATCH /products', () => {
        const updateProductsModel = {
            title: "test",
            writer: "test",
            product_description: "test",
        };
        const wrongProductsModel = {
            wrong_field: 'test',
        };
        beforeEach(async () => {
            // Realiza la solicitud de actualización antes de cada prueba
            await request(app).patch('/products').send(updateProductsModel);
        });
        test('Should return a response with status 200 and type json', async () => {
            const response = await request(app).patch('/products').send(updateProductsModel);
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });
        test('should return a message product updated successfully', async () => {
            const response = await request(app).patch('/products').send(updateProductsModel);
            expect(response.body.message).toContain("The product has been updated successfully!");
        });
        test('should return a message insertion error If patch wrong product ', async () => {
            const response = await request(app).patch('/products').send(wrongProductsModel);
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'title' doesn't have a default value");
        });
        afterAll(async () => {
            await ProductsModel.destroy({ where: { title: 'test' } });
            // Limpiar los productos de prueba después de todas las pruebas
        });
    });
    afterAll(() => {
        server.close();
        db.close();
    });

    //-----------------------------------------------DELETE----------------------------------------------------------
    describe('DELETE /products', () => {
        const productToDelete = {
            title: "test",
            writer: "test",
            product_description: "test",
        };

        beforeAll(async () => {
            // Agrega un producto de prueba antes de ejecutar las pruebas DELETE
            await request(app).post('/products').send(productToDelete);
        });

        test('Should delete a product', async () => {
            const response = await request(app).delete('/products').send({ title: "test" });
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("Product deleted successfully");
        });

        test('Should return an error when trying to delete a non-existent product', async () => {
            const response = await request(app).delete('/products').send({ title: "non_existent_product" });
            expect(response.status).toBe(404);
            expect(response.body.message).toContain("Product not found");
        });

        afterAll(async () => {
            // Limpia el producto de prueba después de ejecutar las pruebas DELETE
            await ProductsModel.destroy({ where: { title: 'test' } });
        });

        afterAll(() => {
            server.close();
            db.close();
        });
    });
});
