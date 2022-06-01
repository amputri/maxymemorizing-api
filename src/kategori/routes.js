const { Router } = require('express')
const controller = require('./controller')

const router = Router()

const authMiddleware = require('../auth/middleware')

router.get('/:pokok', controller.getKategori)
router.post('/', authMiddleware.verifyToken, controller.insertKategori)
router.put('/', authMiddleware.verifyToken, controller.updateKategori)
router.delete('/:id', authMiddleware.verifyToken, controller.deleteKategori)

module.exports = router
