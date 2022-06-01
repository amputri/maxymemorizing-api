const time = "TO_CHAR(a.created_at, 'DD-MM-YYYY HH24:MI:SS') AS create_at, TO_CHAR(a.updated_at, 'DD-MM-YYYY HH24:MI:SS') AS update_at"
const admin = "b.nama AS create_by, c.nama AS update_by"
const fromJoin = "admin b, admin c"
const whereJoin = "a.created_by = b.id AND a.updated_by = c.id"

const getData = `SELECT a.*, ${time}, ${admin} FROM materi a, ${fromJoin} WHERE a.tema=$1 AND ${whereJoin} ORDER BY a.urutan ASC`
const insertData = "INSERT INTO materi (tema, urutan, judul, materi, created_by, updated_by) VALUES ($1, $2, $3, $4, $5, $5)"
const updateData = "UPDATE materi SET tema=$1, urutan=$2, judul=$3, materi=$4, updated_at=now(), updated_by=$6 WHERE id=$5"
const deleteData = "DELETE FROM materi WHERE id=$1"

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData
}
