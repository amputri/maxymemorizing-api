const express = require('express')
const cors = require('cors')

const app = express()
const port = 3333

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('uploads'))

app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    )
    next()
})

const auth = require('./src/auth/controller')

const adminRoutes = require('./src/admin/routes')
const surahRoutes = require('./src/surah/routes')
const ayatRoutes = require('./src/ayat/routes')

app.post('/login', auth.loginAdmin)

app.use('/admin', adminRoutes)
app.use('/surah', surahRoutes)
app.use('/ayat', ayatRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
