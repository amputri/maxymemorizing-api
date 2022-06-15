const pool = require('../../config/db')
const queries = require('./queries')

const getTema = (req, res) => {
    pool.query(queries.getData, [req.params.kategori])
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

const insertTema = (req, res) => {
    const { kategori, urutan, judul, gambar, referensi, id_session } = req.body

    pool.query(queries.insertData, [kategori, urutan, judul, gambar, referensi, id_session])
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

const updateTema = (req, res) => {
    var { kategori, urutan, judul, gambar, referensi, id, id_session } = req.body

    pool.query(queries.updateData, [kategori, urutan, judul, gambar, referensi, id, id_session])
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

const deleteTema = (req, res) => {
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
    getTema,
    insertTema,
    updateTema,
    deleteTema
}
