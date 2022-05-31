const time = "TO_CHAR(a.created_at, 'DD-MM-YYYY HH24:MI:SS') AS create_at, TO_CHAR(a.updated_at, 'DD-MM-YYYY HH24:MI:SS') AS update_at"
const admin = "b.nama AS create_by, c.nama AS update_by"
const fromJoin = "admin b, admin c"
const whereJoin = "a.created_by = b.id AND a.updated_by = c.id"

const getData = `SELECT a.*, ${time}, ${admin} FROM admin a, ${fromJoin} WHERE a.id!=$1 AND ${whereJoin} ORDER BY a.level ASC, a.status DESC, a.nama ASC`
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
