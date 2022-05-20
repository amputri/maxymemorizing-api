const pool = require('../../config/db')
const base = require('../../config/base')
const queries = require('./queries')

const getAyat = (req, res) => {
    pool.query(queries.getData, [req.params.id])
        .then(result => {
            return res.status(200).json(result.rows[0])
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'gagal mendapat data'
            })
        })
}

const insertAyat = (req, res) => {
    const { id, id_session } = req.body
    const gambar = `${base.url}/ayat/${req.file.filename}`

    pool.query(queries.insertData, [id, gambar, id_session])
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

const updateAyat = (req, res) => {
    const gambar = `${base.url}/ayat/${req.file.filename}`

    pool.query(queries.updateData, [gambar, req.params.id, req.body.id_session])
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

const deleteAyat = (req, res) => {
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

module.exports = {
    getAyat,
    insertAyat,
    updateAyat,
    deleteAyat
}
