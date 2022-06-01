const pool = require('../../config/db')
const queries = require('./queries')

const getMateri = (req, res) => {
    pool.query(queries.getData, [req.params.tema])
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

const insertMateri = (req, res) => {
    const { tema, urutan, judul, materi, id_session } = req.body
    
    pool.query(queries.insertData, [tema, urutan, judul, materi, id_session])
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

const updateMateri = (req, res) => {
    var { tema, urutan, judul, materi, id, id_session } = req.body

    pool.query(queries.updateData, [tema, urutan, judul, materi, id, id_session])
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

const deleteMateri = (req, res) => {
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
    getMateri,
    insertMateri,
    updateMateri,
    deleteMateri
}
