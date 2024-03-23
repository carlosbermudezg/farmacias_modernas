const { getAll, getOne} = require('../controllers/category.controller');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerCategory = express.Router();

routerCategory.route('/')
    .get(getAll)

routerCategory.route('/:id')
    .get(getOne)
module.exports = routerCategory;