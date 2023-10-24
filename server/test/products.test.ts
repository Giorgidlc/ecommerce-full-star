import request from 'supertest';
import {server,app} from '../src/index.ts'
import ProductModel from '../src/models/productModel.ts';
import { Product, HttpProductResponse } from '../src/types/productsTypes.ts';
import {openConnectionDb, closeConnectionDb} from '../src/config/db.ts';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';




describe("CRUD Products Test",() =>{
            
    let connection : Promise<any>;
    let response : HttpProductResponse<Product>;
   

    describe("GET /Products", () =>{
       
        
           
        beforeEach(async() =>{
           
            connection =  openConnectionDb();
            response = await request(app).get('/products').send();
                
        })
        test('Should return a response with status 200 and type json, when I send a Get request', async() => {
               
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test("Should return all products",async() => {
            
            expect(response.body).toBeInstanceOf(Array);
                 
        })
          
               
    })
      

       
        describe('POST /products',() =>{ 
    
           const newProduct = {
               product_name: "test",
               product_description: "test",
               price: 2,
               stock: 1
           }
   
           const wrongProduct = {
               wrong_field: 2
           }
   
           test('Should return a response with status 200 and type json when a correct product is Added', async () =>{
               const response = await request(app).post('/products').send(newProduct)
               expect(response.status).toBe(201)
               expect(response.headers['content-type']).toContain('json')
           });
   
           test('Should return a message product created successfully', async () =>{
               const response = await request(app).post('/products').send(newProduct)
               expect(response.body.message).toContain("The Product has been created successfully!")
           })
   
           test('Should return a message insertion error If post wrong product ', async () =>{
               const response = await request(app).post('/products').send(wrongProduct)
               expect(response.status).toBe(400);
               expect(response.body.message).toContain("Field 'title' doesn't have a default value")
           })
   
           afterAll(async () => {
               await ProductModel.eliminateByName('test');
           }) 
   
       })
        afterAll(async()=> {
        server.close();
        const realConnection = await connection; 
        closeConnectionDb(realConnection);
           
    })
   
   })