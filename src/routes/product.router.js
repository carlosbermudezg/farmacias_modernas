const { getAll, getOne, getSearch, getByCategory, getBrands, getProductsByBrands, getBrandById } = require('../controllers/product.controller')
const express = require('express')
const verifyJWT = require('../utils/verifyJWT')

const routerProduct = express.Router()

routerProduct.route('/')
    .get(getAll)

routerProduct.route('/brands')
    .get(getBrands)

routerProduct.route('/brands/:id')
    .get(getBrandById)

routerProduct.route('/byBrands')
    .get(getProductsByBrands)

routerProduct.route('/getByCategory')
    .get(getByCategory)

routerProduct.route('/search')
    .get(verifyJWT, getSearch)

routerProduct.route('/:id')
    .get(verifyJWT, getOne)
    
module.exports = routerProduct;