const catchError = require('../utils/catchError');
const Category = require('../models/Category');

const getAll = catchError(async(req, res) => {
    const results = await Category.findAllCategory();
    return res.status(200).json(results);
});

module.exports = {
    getAll
}