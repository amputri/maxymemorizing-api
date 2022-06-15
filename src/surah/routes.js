const { Router } = require('express')
const controller = require('./controller')

const router = Router()

const authMiddleware = require('../auth/middleware')

router.get('/:id', controller.getSurah)
router.post('/', authMiddleware.verifyToken, controller.insertSurah)
router.put('/', authMiddleware.verifyToken, controller.updateSurah)
router.delete('/:id', authMiddleware.verifyToken, controller.deleteSurah)

module.exports = router
