const express = require('express');
const routerCategory = require('./category.router');
const routerProduct = require('./product.router');
const router = express.Router();

router.use('/categories', routerCategory)
router.use('/products', routerProduct)

module.exports = router;