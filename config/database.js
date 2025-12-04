const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: false,
        enableArithAbort: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('SUCCESFULLY CONNECTED TO AZURE DB!')
        return pool;
    })
    .catch(err => {
        console.error('DATABASE CONNECTION FAILED!\n', err);
        process.exit(1);
    });

module.exports = {
    sql,
    poolPromise
};