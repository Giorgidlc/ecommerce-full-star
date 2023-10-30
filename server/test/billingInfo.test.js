import request from 'supertest';
import { server, app } from '../out/index';
import {openConnectionDb, closeConnectionDb} from '../out/config/db.js';
import BillingInfoModel from '../src/models/billingInfoModel';



    
describe('CRUD Billing Info', () => {
    
            
        let connection;
        let response;
       
    
        describe("GET /All Billing Info", () =>{
           
            
               
            beforeEach(async() =>{
               
                connection =  openConnectionDb();
                response = await request(app).get('/billingInfo').send();
                    
            })
            test('Should return a response with status 200 and type json, when I send a Get request', async() => {
                   
                expect(response.status).toBe(200);
                expect(response.headers['content-type']).toContain('json');
            })
            test("Should return all products",async() => {
                
                expect(response.body).toBeInstanceOf(Object);
                     
            })
              
                   
        })
           
            describe('POST /BillingInfo',() =>{ 
        
               const newBillingInfo = {
                    street: "Test",
                    user_number: 13,
                    flat: 5,
                    door: "izq",
                    zipcode: "28020",
                    city: "Madrid",
                    county: "Madrid",
                    country: "Spain"
                }
                    
                  
       
               const wrongBillingInfo = {
                   wrong_field: 2.75,
                   wrong_field2: "pesa"
               }
       
               test('Should return a response with status 200 and type json when a correct BillingInfo is Added', async () =>{
                   const response = await request(app).post('/billingInfo').send(newBillingInfo)
                   expect(response.status).toBe(201)
                   expect(response.headers['content-type']).toContain('json')
               });
       
               test('Should return a message BillingInfo created successfully', async () =>{
                   const response = await request(app).post('/billingInfo').send(newBillingInfo)
                   expect(response.body.message).toContain("Billing Info created successfully")
               })
       
               test('Should return a message insertion error If post wrong BllingInfo ', async () =>{
                   const response = await request(app).post('/billingInfo').send(wrongBillingInfo)
                   expect(response.status).toBe(400);
                   expect(response.body.message).toContain("Invalid data. All fields are required.")
               })
       
               afterAll(async () => {
                   await BillingInfoModel.eliminateByStreet('test');
               }) 
       
    afterAll(async()=> {
        server.close();
        const realConnection = await connection; 
        closeConnectionDb(realConnection);
           
    })
   
});    
        
})