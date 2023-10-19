const { Sequelize } = require('sequelize');
const db = new Sequelize('dreams_and_cookies', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'

})

export default db;