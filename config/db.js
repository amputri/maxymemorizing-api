const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'maxy_memorizing',
    password: 'Putri1542',
    port: 5432,
})

module.exports = pool
