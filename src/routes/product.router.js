const { getAll, getOne, getSearch } = require('../controllers/product.controller');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerProduct = express.Router();

routerProduct.route('/')
    .get(verifyJWT, getAll)

routerProduct.route('/:id')
    .get(verifyJWT, getOne)

routerProduct.route('/:id/:search')
    .get(verifyJWT, getSearch)

module.exports = routerProduct;