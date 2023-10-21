import mysql from 'mysql2/promise';
import module from './password';
import DbConfig from '../interfaces/configDB.interfaces';


const DBCONFIG: DbConfig = {

    host: 'localhost',
    database: 'dreams_and_cookies',
    user: 'root',
    password: module.password,
    port: 3306
}

 async function conectionDb() {
    try {
        const connection = mysql.createConnection(DBCONFIG);
        console.log('Conected Successfully to  DB!!!');
        return connection;
    } catch (error) {
        throw error;        
    }
    

}



export default conectionDb;