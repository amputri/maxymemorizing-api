const pool = require('../../config/db')
const queries = require('./queries')

const getKategori = (req, res) => {
    pool.query(queries.getData, [req.params.pokok])
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

const insertKategori = (req, res) => {
    const { pokok, urutan, kategori, id_session } = req.body
    
    pool.query(queries.insertData, [pokok, urutan, kategori, id_session])
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

const updateKategori = (req, res) => {
    var { pokok, urutan, kategori, id, id_session } = req.body

    pool.query(queries.updateData, [pokok, urutan, kategori, id, id_session])
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

const deleteKategori = (req, res) => {
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
    getKategori,
    insertKategori,
    updateKategori,
    deleteKategori
}
