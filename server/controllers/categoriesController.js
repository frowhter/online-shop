const {Categories} = require('../models/models')
const ApiError = require('../error/ApiError')
class CategoriesController {
    async create (req, res) {
        const {title, description} = req.body
        const category = await Categories.create({title, description})
        return res.json(category)
    }

    async getAll (req, res) {
        const categories = await Categories.findAll()
        return res.json(categories)
    }

}

module.exports = new CategoriesController()