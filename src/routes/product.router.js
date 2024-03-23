const { getAll, getOne, getSearch, getByCategory } = require('../controllers/product.controller')
const express = require('express')
const verifyJWT = require('../utils/verifyJWT')

const routerProduct = express.Router()

routerProduct.route('/')
    .get(verifyJWT,getAll)

routerProduct.route('/getByCategory')
    .get(getByCategory)

routerProduct.route('/search')
    .get(verifyJWT, getSearch)

routerProduct.route('/:id')
    .get(verifyJWT, getOne)
    
module.exports = routerProduct;