const { getAll, getOne, getSearch, getByCategory, getBrands, getProductsByBrands, getBrandById } = require('../controllers/product.controller')
const express = require('express')
const verifyJWT = require('../utils/verifyJWT')

const routerProduct = express.Router()

routerProduct.route('/')
    .get(verifyJWT, getAll)

routerProduct.route('/brands')
    .get(verifyJWT, getBrands)

routerProduct.route('/brands/:id')
    .get(verifyJWT, getBrandById)

routerProduct.route('/byBrands')
    .get(verifyJWT, getProductsByBrands)

routerProduct.route('/getByCategory')
    .get(verifyJWT, getByCategory)

routerProduct.route('/search')
    .get(verifyJWT, getSearch)

routerProduct.route('/:id')
    .get(verifyJWT, getOne)
    
module.exports = routerProduct;