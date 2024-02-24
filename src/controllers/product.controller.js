const catchError = require('../utils/catchError');
const Product = require('../models/Product');

const getAll = catchError(async(req, res) => {
    const results = await Product.findAll();
    return res.status(200).json(results[0]);
});

const getOne = catchError(async(req, res)=>{
    const { id } = req.params
    const result = await Product.findById(id)
    return res.status(200).json(result[0])
})

const getSearch = catchError(async(req, res)=>{
    const { search } = req.params
    const result = await Product.findByProduct(decodeURIComponent(search))
    return res.status(200).json(result[0])
})

module.exports = {
    getAll,
    getOne,
    getSearch
}