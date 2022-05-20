const pool = require('../../config/db')
const base = require('../../config/base')
const queries = require('../admin/queries')

var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")

const loginAdmin = (req, res) => {
    const { username, password } = req.body

    pool.query(queries.cekData, [username])
        .then(result => {
            if (!(bcrypt.compareSync(password, result.rows[0].password))) {
                return res.status(401).json({
                    message: 'username / password salah'
                })
            }

            var token = jwt.sign({ level: result.rows[0].level }, base.secretJWTKey, {
                expiresIn: 1800
            })

            return res.status(200).json({
                data: result.rows[0],
                token: token,
                message: 'berhasil login'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal cek data'
            })
        })
}

module.exports = {
    loginAdmin
}
