import request from 'supertest';
import {server,app} from '../out/index';
import UserModel from '../out/models/userModel';
import {openConnectionDb, closeConnectionDb} from '../out/config/db';

describe("CRUD Users Test",() =>{ 


//-----------------------------------------------GET---------------------------------------------------------------------
    let response;
    let connection;

    describe("GET /Users", () => {
    
        beforeEach(async() =>{
            response = await request(app).get('/users').send();
            connection = await openConnectionDb();
        
        })
        test('Should return a response with status 200 and type json, when I send a Get request', async() => {
            
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test("Should return all users",async() => {
            expect(response.body).toBeInstanceOf(Array);
        })
        afterAll(async()=> {
            server.close();
            closeConnectionDb(connection)
        
        })
    })
    
//-----------------------------------------------POST-------------------------------------------------------------------
    
    describe('POST /users',() =>{ 
    
        const newUser = {
            user_name: "test", 
            surname: "test",
            email: "test",
            user_password: "test"
        }

        const wrongUser = {
            wrong_field:'test'
        }

        test('Should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/users').send(newUser)
            expect(response.status).toBe(201)
            expect(response.headers['content-type']).toContain('json')
        });

        test('Should return a message user created successfully', async () =>{
            const response = await request(app).post('/users').send(newUser)
            expect(response.body.message).toContain("The User has been created successfully!")
        })

        test('Should return a message insertion error If post wrong user', async () =>{
            const response = await request(app).post('/users').send(wrongUser)
            expect(response.status).toBe(400);
            expect(response.body.message).toContain("Invalid data. All fields are required.")
        })

        afterAll(async () => {
            await UserModel.eliminateByName('test');
        }) 

    })
    afterAll(async()=> {
    server.close();
    closeConnectionDb(connection)
    })
})