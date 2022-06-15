const { Router } = require('express')
const controller = require('./controller')

const router = Router()

const authMiddleware = require('../auth/middleware')

router.get('/:kategori', controller.getTema)
router.post('/', authMiddleware.verifyToken, controller.insertTema)
router.put('/', authMiddleware.verifyToken, controller.updateTema)
router.delete('/:id', authMiddleware.verifyToken, controller.deleteTema)

module.exports = router
