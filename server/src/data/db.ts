const { Sequelize } = require('sequelize');
const db = new Sequelize('dreams_and_cookies', 'root', '3commerce?FULLstar', {
    host: 'localhost',
    dialect: 'mysql'

})

export default db;