const Router = require('express')
const router = new Router()
const productROuter = require('./productRouter')
const userRouter = require('./userRouter')
const categoriesRouter = require('./categoriesRouter')
const typeRouter = require('./typeRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/categories', categoriesRouter)
router.use('/product', productROuter)

module.exports = router