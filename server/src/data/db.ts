const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dreams_and_cookies', 'root', '3commerce?FULLstar', {
    host: 'localhost',
    dialect: 'mysql'

})

export default sequelize;