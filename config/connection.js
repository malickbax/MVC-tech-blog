// Declaring the sequelize const
const Sequelize = require('sequelize');

// Importing dotenv dependency
require('dotenv').config();

// Sequelize starts
let sequelize;
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // CREDIT: Worked on this part with the help of coder colleague Brams Lo
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;