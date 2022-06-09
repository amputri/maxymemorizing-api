const { Router } = require('express')
const controller = require('./controller')

const router = Router()

const authMiddleware = require('../auth/middleware')

router.get('/ayat/:key', controller.getByAyat)
router.get('/:tema', controller.getMateri)
router.post('/', authMiddleware.verifyToken, controller.insertMateri)
router.put('/', authMiddleware.verifyToken, controller.updateMateri)
router.delete('/:id', authMiddleware.verifyToken, controller.deleteMateri)

module.exports = router
