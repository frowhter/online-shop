const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require("uuid");
const path = require("path");
class TypeController {
    async create (req, res, next) {
        try {
            const {name} = req.body
            const {img} = req.files
            let fileName = 'type'+uuid.v4() + ".svg"
            await img.mv(path.resolve(__dirname, '..', 'static','Products', fileName))
            const type = await Type.create({name, img: fileName})
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll (req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()