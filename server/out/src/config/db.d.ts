import mysql from 'mysql2/promise';
declare function openConnectionDb(): Promise<mysql.Connection>;
declare function closeConnectionDb(connection: mysql.Connection): Promise<void>;
export { openConnectionDb, closeConnectionDb };
