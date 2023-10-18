import request from 'supertest';
import app from '../src/index.ts';

type HttpProductResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body:{
        products: T[];
    } ;
  };
  type Products ={
    id: string;
    user_name: string;
    surname: string;
    email: string;
    user_password: string;
    paying_method_id: string; 
    register_date: string;

  }
describe("CRUD Products Test",() =>{

    //-----------------------------------------------GET----------------------------------------------------------   
       describe("GET /Products", () =>{
           let response : HttpProductResponse<Products>;
           beforeEach(async()=>{
               response = await request(app).get('/products').send()
           })
           test('Should return a response with status 200 and type json, when I send a Get request', async() => {
               
               expect(response.status).toBe(200);
               expect(response.headers['content-type']).toContain('json');
           })
           test("Should return all products",async() => {
               expect(response.body).toBeInstanceOf(Array);
                 
           })
       })
       //-----------------------------------------------POST----------------------------------------------------------
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
               await ProductModel.destroy({where:{title: 'test'}})
           }) 
   
       })
       afterAll(()=> {
           server.close();
           db.close();
   
       })
   
   })