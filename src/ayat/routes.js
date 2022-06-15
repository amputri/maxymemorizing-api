const { Router } = require('express')
const controller = require('./controller')

const router = Router()

const authMiddleware = require('../auth/middleware')

router.get('/:id', controller.getAyat)
router.post('/', authMiddleware.verifyToken, controller.insertAyat)
router.put('/', authMiddleware.verifyToken, controller.updateAyat)
router.delete('/:id', authMiddleware.verifyToken, controller.deleteAyat)

module.exports = router
