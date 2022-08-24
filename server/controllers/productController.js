const uuid = require('uuid');
const path = require('path');
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
class ProductController {
    async create (req, res, next) {
        try {
            let {name, price, typeId,  info} = req.body
            const {img} = req.files
            let fileName = 'product'+uuid.v4() + ".svg"
            await img.mv(path.resolve(__dirname, '..', 'static','Products', fileName))
            const product = await Product.create({name, price, typeId, img: fileName})
            if (info){
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }



            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll (req, res, next) {
        try {
            let {typeId, limit, page} = req.query
            page = page || 1
            limit = limit || 10
            let offset = page * limit - limit
            let products;
            if (!typeId){
                products = await Product.findAndCountAll({limit, offset})
            }

            if (typeId) {
                products = await Product.findAndCountAll({where: {typeId}, limit, offset})
            }
            return res.json(products)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }


    }

    async getOne (req, res, next) {
        try {
            const {id} = req.params
            const product = await Product.findOne(
                {
                    where: {id},
                    include: [{model: ProductInfo, as: 'info'}]
                },
            )
            return res.json(product)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ProductController()