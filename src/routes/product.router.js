const { getAll, getOne, getSearch } = require('../controllers/product.controller');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerProduct = express.Router();

routerProduct.route('/')
    .get(getAll)

routerProduct.route('/:id')
    .get(getOne)

routerProduct.route('/:id/:search')
    .get(getSearch)

module.exports = routerProduct;