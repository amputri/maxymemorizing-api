const pool = require('../../config/db')
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
    const { id, gambar, id_session } = req.body

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
    const { gambar, id, id_session } = req.body

    pool.query(queries.updateData, [gambar, id, id_session])
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
