const castId = "CAST(SPLIT_PART(a.id, ':', 1) AS int) AS nomor_surah, CAST(SPLIT_PART(a.id, ':', 2) AS int) AS nomor_ayat"
const time = "TO_CHAR(a.created_at, 'DD-MM-YYYY HH24:MI:SS') AS create_at, TO_CHAR(a.updated_at, 'DD-MM-YYYY HH24:MI:SS') AS update_at"
const admin = "b.nama AS create_by, c.nama AS update_by"
const fromJoin = "admin b, admin c"
const whereJoin = "a.created_by = b.id AND a.updated_by = c.id"

const countData = "SELECT COUNT(*) FROM ayat"
const getAllData = `SELECT a.*, ${castId}, ${time}, ${admin}  FROM ayat a, ${fromJoin} WHERE ${whereJoin} ORDER BY nomor_surah, nomor_ayat ASC LIMIT 10 OFFSET $1`
const getData = `SELECT a.*, ${time}, ${admin} FROM ayat a, ${fromJoin} WHERE a.id=$1 AND ${whereJoin}`
const insertData = "INSERT INTO ayat (id, gambar, created_by, updated_by) VALUES ($1, $2, $3, $3)"
const updateData = "UPDATE ayat SET gambar=$1, updated_at=now(), updated_by=$3 WHERE id=$2"
const deleteData = "DELETE FROM ayat WHERE id=$1"

module.exports = {
    countData,
    getAllData,
    getData,
    insertData,
    updateData,
    deleteData
}
