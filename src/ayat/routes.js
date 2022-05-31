const { Router } = require('express')
const controller = require('./controller')
const multer = require('multer')
var randomstring = require("randomstring")

const router = Router()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/ayat')
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.id.replace(':','')}-${randomstring.generate()}.${file.originalname.split('.').pop()}`)
    }
})
var upload = multer({ storage: storage })

const authMiddleware = require('../auth/middleware')

router.get('/:id', controller.getAyat)
router.post('/', [authMiddleware.verifyToken, upload.single('gambar')], controller.insertAyat)
router.post('/:id', [authMiddleware.verifyToken, upload.single('gambar')], controller.updateAyat)
router.delete('/:id/:gambar_lama', authMiddleware.verifyToken, controller.deleteAyat)

module.exports = router
