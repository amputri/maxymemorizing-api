const pool = require('../../config/db')
const base = require('../../config/base')
const queries = require('./queries')
var fs = require('fs')

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
    const { id, kata_kunci, narasi, uraian, id_session } = req.body
    
    const gambar_surah = `${base.url}/surah/${req.file.filename}`

    pool.query(queries.insertData, [id, kata_kunci, gambar_surah, narasi, uraian, id_session])
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
    var { kata_kunci, gambar_surah, narasi, uraian, id_session } = req.body

    if (req.file) {
        // fs.unlinkSync(`uploads/surah/${gambar_surah.split('/surah/').pop()}`)
        gambar_surah = `${base.url}/surah/${req.file.filename}`
    }

    pool.query(queries.updateData, [kata_kunci, gambar_surah, narasi, uraian, req.params.id, id_session])
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
    const { gambar_lama, id } = req.params

    // fs.unlinkSync(`uploads/surah/${gambar_lama}`)

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
    getSurah,
    insertSurah,
    updateSurah,
    deleteSurah
}
