const { Router } = require('express')
const controller = require('./controller')
const multer = require('multer')

const router = Router()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/surah')
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.id}.${file.originalname.split('.').pop()}`)
    }
})
var upload = multer({ storage: storage })

const authMiddleware = require('../auth/middleware')

router.get('/:id', controller.getSurah)
router.post('/', [authMiddleware.verifyToken, upload.single('gambar')], controller.insertSurah)
router.post('/:id', [authMiddleware.verifyToken, upload.single('gambar')], controller.updateSurah)
router.delete('/:id', authMiddleware.verifyToken, controller.deleteSurah)

module.exports = router
