const countData = "SELECT COUNT(*) FROM admin WHERE id!=$1"
const getData = "SELECT * FROM admin WHERE id!=$1 ORDER BY level ASC, status DESC, nama ASC LIMIT 10 OFFSET $2"
const insertData = "INSERT INTO admin (nama, username, password, level, created_by, updated_by) VALUES ($1, $2, $3, $4, $5, $5)"
const updateData = "UPDATE admin SET nama=$1, username=$2, password=$3, updated_at=now(), updated_by=$4 WHERE id=$4"
const deleteData = "DELETE FROM admin WHERE id=$1"

const updateLevel = "UPDATE admin SET level=$1, updated_at=now(), updated_by=$3 WHERE id=$2"
const updateStatus = "UPDATE admin SET status=$1, updated_at=now(), updated_by=$3 WHERE id=$2"
const resetPassword = "UPDATE admin SET password=$1, updated_at=now(), updated_by=$3 WHERE id=$2"

const cekUsername = "SELECT * FROM admin WHERE username=$1 AND id!=$2"
const cekData = "SELECT * FROM admin WHERE username=$1 AND status=1"
const cekPassword = "SELECT * FROM admin WHERE username=$1"

module.exports = {
    countData,
    getData,
    insertData,
    updateData,
    deleteData,
    updateLevel,
    updateStatus,
    resetPassword,
    cekUsername,
    cekData,
    cekPassword
}
