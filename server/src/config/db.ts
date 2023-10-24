import mysql,{Connection} from 'mysql2/promise';
import module from './password.ts';
import DbConfig from '../interfaces/configDB.interfaces.ts';


const DBCONFIG: DbConfig = {

    host: 'localhost',
    database: module.database,
    user: 'root',
    password: module.password,
    port: 3306
}

async function openConnectionDb() {
    
    try {
        let connection = await mysql.createConnection(DBCONFIG);
        return connection;
    } catch (error:unknown) {
        console.log('Error opening the database connection: ' +{message:(error as Error).message} );
        throw error;
    } 
    
}

async function closeConnectionDb(connection: mysql.Connection) {
    try {
        await connection.end();
    } catch (error:unknown) {
        console.log('Error closing the database connection: ' + {message:(error as Error).message});
    }
}






export {openConnectionDb, closeConnectionDb};