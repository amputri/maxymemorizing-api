const { Router } = require('express')
const controller = require('./controller')
const multer = require('multer')
var randomstring = require("randomstring")

const router = Router()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/tema')
    },
    filename: function (req, file, cb) {
        cb(null, `tema-${randomstring.generate()}.${file.originalname.split('.').pop()}`)
    }
})
var upload = multer({ storage: storage })

const authMiddleware = require('../auth/middleware')

router.get('/:kategori', controller.getTema)
router.post('/', [authMiddleware.verifyToken, upload.single('gambar')], controller.insertTema)
router.post('/:id', [authMiddleware.verifyToken, upload.single('gambar')], controller.updateTema)
router.delete('/:id/:gambar_lama', authMiddleware.verifyToken, controller.deleteTema)

module.exports = router
