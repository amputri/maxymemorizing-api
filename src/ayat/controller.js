const pool = require('../../config/db')
const base = require('../../config/base')
const queries = require('./queries')
var fs = require('fs')

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
                message: 'berhasil menambahkan datta'
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
    const { gambar_lama, id_session } = req.body
    const gambar = `${base.url}/ayat/${req.file.filename}`

    // fs.unlinkSync(`uploads/ayat/${gambar_lama.split('/ayat/').pop()}`)

    pool.query(queries.updateData, [gambar, req.params.id, id_session])
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
    const { gambar_lama, id } = req.params

    // fs.unlinkSync(`uploads/ayat/${gambar_lama}`)

    pool.query(queries.deleteData, [id])
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
