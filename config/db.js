const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'sdlggxioukcwji',
    host: 'ec2-54-147-33-38.compute-1.amazonaws.com',
    database: 'dffp8cid61hui7',
    password: 'b94d12931f11c3218fc0badcac60f3384c4fc20dc63f5853524ce686a362aece',
    port: 5432,
    dialect: "postgres",
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
