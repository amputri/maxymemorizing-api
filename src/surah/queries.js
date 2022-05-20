const getData = "SELECT * FROM surah WHERE id=$1"
const insertData = "INSERT INTO surah (id, kata_kunci, gambar, narasi, uraian, created_by, updated_by) VALUES ($1, $2, $3, $4, $5, $6, $6)"
const updateData = "UPDATE surah SET kata_kunci=$1, gambar=$2, narasi=$3, uraian=$4, updated_at=now(), updated_by=$6 WHERE id=$5"
const deleteData = "DELETE FROM surah WHERE id=$1"

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData
}
