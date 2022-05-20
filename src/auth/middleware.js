const base = require('../../config/base')

const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"]
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        })
    }
    jwt.verify(token, base.secretJWTKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        req.level = decoded.level
        next()
    })
}

const isAdmin = (req, res, next) => {
    if (req.level !== 1) {
        return res.status(403).send({
            message: "Require Admin Role!"
        })
    }
    next()
    return
}

module.exports = {
    verifyToken,
    isAdmin
}
