const env = require('dotenv').config();

/*const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const envi = process.env.ENVI || 'development';

module.exports = {port, host, envi};
*/
module.exports = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    envi: process.env.ENVI || 'development'
};