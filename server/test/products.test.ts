import request from 'supertest';
import {server,app} from '../src/index.ts';
import ProductModel from '../src/models/productModel.ts';
import { Product, HttpProductResponse } from '../src/types/ProductsTypes.ts';
import {openConnectionDb, closeConnectionDb} from '../src/config/db.ts';




describe("CRUD Products Test",async() =>{
        

//-----------------------------------------------GET---------------------------------------------------------------------
    let response : HttpProductResponse<Product>;
    let connection =  await openConnectionDb();

    describe("GET /Products", () =>{
       
        
           
        beforeEach(async() =>{
           
            response = await request(app).get('/products').send();
                
           })
           test('Should return a response with status 200 and type json, when I send a Get request', async() => {
               
               expect(response.status).toBe(200);
               expect(response.headers['content-type']).toContain('json');
           })
           test("Should return all products",async() => {
               expect(response.body).toBeInstanceOf(Array);
                 
           })
           afterAll(async()=> {
            server.close();
            closeConnectionDb(connection)
                   
            })
       })
      
//-----------------------------------------------POST-------------------------------------------------------------------
       
    describe('POST /products',() =>{ 
    
           const newProduct = {
               user_name: "test",
               surname: "test",
               email: "test",
               user_password: "test",
               paying_method_id: "test",
           }
   
           const wrongProduct = {
               wrong_field:'test'
           }
   
           test('Should return a response with status 200 and type json', async () =>{
               const response = await request(app).post('/products').send(newProduct)
               expect(response.status).toBe(200)
               expect(response.headers['content-type']).toContain('json')
           });
   
           test('Should return a message product created successfully', async () =>{
               const response = await request(app).post('/products').send(newProduct)
               expect(response.body.message).toContain("The product has been created successfully!")//Se podría eliminar este test y meter esta lnea en el de arriba?
           })
   
           test('Should return a message insertion error If post wrong product ', async () =>{
               const response = await request(app).post('/products').send(wrongProduct)
               expect(response.status).toBe(500);
               expect(response.body.message).toContain("Field 'title' doesn't have a default value")
           })
   
           afterAll(async () => {
               await ProductModel.eliminateByName('test');
           }) 
   
       })
    afterAll(async()=> {
    server.close();
    closeConnectionDb(connection)
           
    })
   
   })