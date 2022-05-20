const pool = require('../../config/db')
const queries = require('./queries')

const bcrypt = require('bcryptjs')

const getAdmin = (req, res) => {
    pool.query(queries.getData)
        .then(result => {
            return res.status(200).json(result.rows)
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal mendapat data'
            })
        })
}

const insertAdmin = (req, res) => {
    const { nama, username, password, level, id } = req.body

    pool.query(queries.insertData, [nama, username, bcrypt.hashSync(password, 8), level, id])
        .then(result => {
            return res.status(200).json({
                message: 'berhasil menambahkan data'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal menambahkan data'
            })
        })
}

const updateAdmin = (req, res) => {
    const { nama, username, password, id, id_session } = req.body

    pool.query(queries.updateData, [nama, username, bcrypt.hashSync(password, 8), id, id_session])
        .then(result => {
            return res.status(200).json({
                message: 'berhasil mengubah data'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal mengubah data'
            })
        })
}

const deleteAdmin = (req, res) => {
    pool.query(queries.deleteData, [req.params.id])
        .then(result => {
            return res.status(200).json({
                message: 'berhasil menghapus data'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal menghapus data'
            })
        })
}

const updateLevel = (req, res) => {
    const { level, id, id_session } = req.body

    pool.query(queries.updateLevel, [level, id, id_session])
        .then(result => {
            return res.status(200).json({
                message: 'berhasil mengubah level admin'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal mengubah level admin'
            })
        })
}

const updateStatus = (req, res) => {
    const { status, id, id_session } = req.body

    pool.query(queries.updateStatus, [status, id, id_session])
        .then(result => {
            return res.status(200).json({
                message: 'berhasil mengubah status admin'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal mengubah status admin'
            })
        })
}

module.exports = {
    getAdmin,
    insertAdmin,
    updateAdmin,
    deleteAdmin,
    updateLevel,
    updateStatus
}
