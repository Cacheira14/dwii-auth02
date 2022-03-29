const dbConfig = require('../configs/db-config');
const Sequelize = require('sequelize');

const sqlize = new Sequelize({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    passwords: dbConfig.PASSWORD,
    database: dbConfig.DB,
    dialect: dbConfig.dialect
})

const db = {};

db.sequelize = sqlize;
db.Sequelize = Sequelize;
db.OP = Sequelize.OP;

db.user = require('./user-model')(sqlize);

module.exports = db;