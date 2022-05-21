const { Router } = require('express')
const router = Router()

const controller = require('./controller')
const middleware = require('./middleware')
const authMiddleware = require('../auth/middleware')

router.use('/', authMiddleware.verifyToken)

router.get('/:id', authMiddleware.isAdmin, controller.getAdmin)
router.get('/user/:id', controller.getCurrentUser)
router.post('/', [authMiddleware.isAdmin, middleware.cekUsername], controller.insertAdmin)
router.put('/', [middleware.cekPassword, middleware.cekUsername], controller.updateAdmin)
router.delete('/:id', authMiddleware.isAdmin, controller.deleteAdmin)

router.put('/level', authMiddleware.isAdmin, controller.updateLevel)
router.put('/status', authMiddleware.isAdmin, controller.updateStatus)
router.put('/reset-password', authMiddleware.isAdmin, controller.resetPassword)

module.exports = router
