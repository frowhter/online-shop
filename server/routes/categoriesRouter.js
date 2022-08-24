const Router = require('express')
const router = new Router()
const categoriesController = require('../controllers/categoriesController')

router.post('/', categoriesController.create)
router.get('/', categoriesController.getAll)

module.exports = router