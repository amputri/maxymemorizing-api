const pool = require('../../config/db')
const queries = require('./queries')

const getSurah = (req, res) => {
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

const insertSurah = (req, res) => {
    const { id, kata_kunci, gambar, narasi, uraian, id_session } = req.body

    pool.query(queries.insertData, [id, kata_kunci, gambar, narasi, uraian, id_session])
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

const updateSurah = (req, res) => {
    var { kata_kunci, gambar, narasi, uraian, id, id_session } = req.body

    pool.query(queries.updateData, [kata_kunci, gambar, narasi, uraian, id, id_session])
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

const deleteSurah = (req, res) => {
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
    getSurah,
    insertSurah,
    updateSurah,
    deleteSurah
}
