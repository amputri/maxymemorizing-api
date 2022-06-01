const time = "TO_CHAR(a.created_at, 'DD-MM-YYYY HH24:MI:SS') AS create_at, TO_CHAR(a.updated_at, 'DD-MM-YYYY HH24:MI:SS') AS update_at"
const admin = "b.nama AS create_by, c.nama AS update_by"
const fromJoin = "admin b, admin c"
const whereJoin = "a.created_by = b.id AND a.updated_by = c.id"

const getData = `SELECT a.*, ${time}, ${admin} FROM tema a, ${fromJoin} WHERE a.kategori=$1 AND ${whereJoin} ORDER BY a.urutan ASC`
const insertData = "INSERT INTO tema (kategori, urutan, judul, gambar, referensi, created_by, updated_by) VALUES ($1, $2, $3, $4, $5, $6, $6)"
const updateData = "UPDATE tema SET kategori=$1, urutan=$2, judul=$3, gambar=$4, referensi=$5, updated_at=now(), updated_by=$7 WHERE id=$6"
const deleteData = "DELETE FROM tema WHERE id=$1"

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData
}
