import request from 'supertest';
import { server, app } from '../out/index';
const testBillingInfo = {
    street: '123 Main St',
    user_number: 42,
    flat: null,
    door: null,
    zipcode: '12345',
    county: 'Sample County',
    city: 'Sample City',
    country: 'Sample Country',
    user_id: 'someUserId',
};
    
let createdBillingInfo = null;
    
describe('Billing Info Endpoints', () => {
    
    let connection;
    let response;
   
       
        
           
    beforeEach(async() =>{
           
     connection =  openConnectionDb();
            response = await request(app).get('/products').send();
                
    })

    test('should create a new billing info', async () => {
        const res = await request(app)
        .post('/billingInfo')
        .send(testBillingInfo);
        expect(res.statusCode).toEqual(201);
        expect(res.body.street).toBe(testBillingInfo.street);
        createdBillingInfo = res.body;
    });
    
    test('should get all billing info', async () => {
        const res = await request(app).get('/billingInfo');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining(testBillingInfo)]));
    });
    
    test('should get a billing info by id', async () => {
        const res = await request(app).get(`/billingInfo/${createdBillingInfo.billing_id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.street).toBe(testBillingInfo.street);
    });
    
    test('should update a billing info', async () => {
        const updatedInfo = { ...testBillingInfo, street: 'Updated Street' };
        const res = await request(app)
        .put(`/billingInfo/${createdBillingInfo.billing_id}`)
        .send(updatedInfo);
        expect(res.statusCode).toEqual(200);
        expect(res.body.street).toBe(updatedInfo.street);
    });
    
    test('should delete a billing info', async () => {
        const res = await request(app).delete(`/billingInfo/${createdBillingInfo.billing_id}`);
        expect(res.statusCode).toEqual(204);
    });
    afterAll(async()=> {
        server.close();
        const realConnection = await connection; 
        closeConnectionDb(realConnection);
           
    })
   
});    
        

