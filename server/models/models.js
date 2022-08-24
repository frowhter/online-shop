const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, default: "USER"},
})

const Album = sequelize.define('', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})

const Songs = sequelize.define('songs', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    audio: {type: DataTypes.STRING, allowNull: false},

})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define('basket_product',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Categories = sequelize.define('categories',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const ProductInfo = sequelize.define('product_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeCategories = sequelize.define('type_categories',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CategoriesProduct = sequelize.define('categories_product',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Album.hasMany(Songs)
Songs.belongsTo(Album)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasMany(ProductInfo, {as: 'info'})
ProductInfo.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Type.hasMany(Product)
Product.belongsTo(Type)

Categories.belongsToMany(Product, {through: CategoriesProduct})
Product.belongsToMany(Categories, {through: CategoriesProduct})

Type.belongsToMany(Categories, {through: TypeCategories})
Categories.belongsToMany(Type, {through: TypeCategories})


module.exports = {
    User,
    Album,
    Songs,
    Basket,
    BasketProduct,
    Product,
    ProductInfo,
    Type,
    Categories,
    TypeCategories,
    CategoriesProduct,
}

