import request from 'supertest';
import {server,app} from '../src/index.ts';
import UserModel from '../src/models/userModel.ts';
import { Users, HttpUserResponse } from '../src/types/usersTypes.ts';
import {openConnectionDb, closeConnectionDb} from '../src/config/db.ts';




describe("CRUD Users Test",async() =>{


//-----------------------------------------------GET---------------------------------------------------------------------
    let response : HttpUserResponse<Users>;
    let connection =  await openConnectionDb();

    describe("GET /Users", () =>{
    
        
        
        beforeEach(async() =>{
        
            response = await request(app).get('/users').send();
        
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
            user_password: "test",
            paying_method_id: "test",
            register_date: "test"
        }

        const wrongUser = {
            wrong_field:'test'
        }

        test('Should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/users').send(newUser)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('Should return a message user created successfully', async () =>{
            const response = await request(app).post('/users').send(newUser)
            expect(response.body.message).toContain("The user has been created successfully!")//¿Se podría eliminar este test y meter esta línea en el de arriba?
        })

        test('Should return a message insertion error If post wrong user', async () =>{
            const response = await request(app).post('/users').send(wrongUser)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'title' doesn't have a default value")// ¿title?
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