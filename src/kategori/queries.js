const time = "TO_CHAR(a.created_at, 'DD-MM-YYYY HH24:MI:SS') AS create_at, TO_CHAR(a.updated_at, 'DD-MM-YYYY HH24:MI:SS') AS update_at"
const admin = "b.nama AS create_by, c.nama AS update_by"
const fromJoin = "admin b, admin c"
const whereJoin = "a.created_by = b.id AND a.updated_by = c.id"

const getData = `SELECT a.*, ${time}, ${admin} FROM kategori a, ${fromJoin} WHERE a.pokok=$1 AND ${whereJoin} ORDER BY a.urutan ASC`
const insertData = "INSERT INTO kategori (pokok, urutan, kategori, created_by, updated_by) VALUES ($1, $2, $3, $4, $4)"
const updateData = "UPDATE kategori SET pokok=$1, urutan=$2, kategori=$3, updated_at=now(), updated_by=$5 WHERE id=$4"
const deleteData = "DELETE FROM kategori WHERE id=$1"

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData
}
