const pool = require('../../config/db')
const queries = require('./queries')

var bcrypt = require("bcryptjs")

const cekUsername = (req, res, next) => {
    const { username, id } = req.body

    pool.query(queries.cekUsername, [username, id])
        .then(result => {
            if (result.rowCount === 1) {
                return res.status(401).json({
                    message: 'username sudah ada'
                })
            }
            next()
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal cek data'
            })
        })
}

const cekPassword = (req, res, next) => {
    const { username_lama, password_lama } = req.body
    pool.query(queries.cekPassword, [username_lama])
        .then(result => {
            if (!(bcrypt.compareSync(password_lama, result.rows[0].password))) {
                return res.status(401).json({
                    message: 'password salah'
                })
            }
            next()
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal cek data'
            })
        })
}

module.exports = {
    cekUsername,
    cekPassword
}
