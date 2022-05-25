const time = "TO_CHAR(a.created_at, 'DD-MM-YYYY HH24:MI:SS') AS create_at, TO_CHAR(a.updated_at, 'DD-MM-YYYY HH24:MI:SS') AS update_at"
const admin = "b.nama AS create_by, c.nama AS update_by"
const fromJoin = "admin b, admin c"
const whereJoin = "a.created_by = b.id AND a.updated_by = c.id"

const countData = "SELECT COUNT(*) FROM surah"
const getAllData = `SELECT a.*, ${time}, ${admin} FROM surah a, ${fromJoin} WHERE ${whereJoin} ORDER BY a.id ASC LIMIT 10 OFFSET $1`
const getData = `SELECT a.*, ${time}, ${admin} FROM surah a, ${fromJoin} WHERE a.id=$1 AND ${whereJoin}`
const insertData = "INSERT INTO surah (id, kata_kunci, gambar, narasi, uraian, created_by, updated_by) VALUES ($1, $2, $3, $4, $5, $6, $6)"
const updateData = "UPDATE surah SET kata_kunci=$1, gambar=$2, narasi=$3, uraian=$4, updated_at=now(), updated_by=$6 WHERE id=$5"
const deleteData = "DELETE FROM surah WHERE id=$1"

module.exports = {
    countData,
    getAllData,
    getData,
    insertData,
    updateData,
    deleteData
}
