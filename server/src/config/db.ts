import mysql,{Connection} from 'mysql2/promise';
import module from './password';
import DbConfig from '../interfaces/configDB.interfaces';


const DBCONFIG: DbConfig = {

    host: 'localhost',
    database: 'dreams_and_cookies',
    user: 'root',
    password: module.password,
    port: 3306
}

async function openConnectionDb() {
    
    try {
        let connection = await mysql.createConnection(DBCONFIG);
        console.log('Connected Successfully to DB!!!');
        return connection;
    } catch (error:unknown) {
        console.log('Error opening the database connection: ' +{message:(error as Error).message} );
        throw error;
    } 
    
}

async function closeConnectionDb(connection: mysql.Connection) {
    try {
        await connection.end();
        console.log('Database connection closed successfully');
    } catch (error:unknown) {
        console.log('Error closing the database connection: ' + {message:(error as Error).message});
    }
}
   





export {openConnectionDb, closeConnectionDb};