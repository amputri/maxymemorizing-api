const pool = require('../../config/db')
const base = require('../../config/base')
const queries = require('./queries')
var fs = require('fs')

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
    const { kategori, urutan, judul, referensi, id_session } = req.body
    
    const gambar_tema = `${base.url}/tema/${req.file.filename}`

    pool.query(queries.insertData, [kategori, urutan, judul, gambar_tema, referensi, id_session])
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
    var { kategori, urutan, judul, gambar_tema, referensi, id_session } = req.body

    if (req.file) {
        fs.unlinkSync(`uploads/tema/${gambar_tema.split('/tema/').pop()}`)
        gambar_tema = `${base.url}/tema/${req.file.filename}`
    }

    pool.query(queries.updateData, [kategori, urutan, judul, gambar_tema, referensi, req.params.id, id_session])
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
    const { gambar_lama, id } = req.params

    fs.unlinkSync(`uploads/tema/${gambar_lama}`)

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
    getTema,
    insertTema,
    updateTema,
    deleteTema
}
