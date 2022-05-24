const getAllData = "SELECT * FROM ayat"
const getData = "SELECT * FROM ayat WHERE id=$1"
const insertData = "INSERT INTO ayat (id, gambar, created_by, updated_by) VALUES ($1, $2, $3, $3)"
const updateData = "UPDATE ayat SET gambar=$1, updated_at=now(), updated_by=$3 WHERE id=$2"
const deleteData = "DELETE FROM ayat WHERE id=$1"

module.exports = {
    getAllData,
    getData,
    insertData,
    updateData,
    deleteData
}
