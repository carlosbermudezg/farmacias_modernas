const catchError = require('../utils/catchError');
const Product = require('../models/Product');

// const getAll = catchError(async(req, res) => {
//     const { page, limit } = req.query
//     const offset = (page - 1) * limit
//     const results = await Product.allProductsPagination(limit, offset)
//     const totalPagesData = await Product.countProducts()
//     const totalPages = Math.ceil(totalPagesData[0][0]?.count / limit)
//     console.log(totalPages)

//     return res.status(200).json({
//         data: results[0],
//         pagination: {
//             page: +page,
//             limit: +limit,
//             totalPages: totalPages,
//             totalProducts: totalPagesData[0][0]?.count
//         }
//     });
// });
const getAll = catchError(async(req, res) => {
    const results = await Product.allProductsPagination()
    return res.status(200).json({
        data: results[0]
    });
});

const getProductsByBrands = catchError(async(req, res) => {
    const { array } = req.query
    const results = await Product.getProductsByBrands(array)
    return res.status(200).json({
        data: results[0]
    });
});

const getBrands = catchError(async(req, res) => {
    const results = await Product.getBrands()
    return res.status(200).json({
        data: results
    });
});

const getBrandById = catchError(async(req, res) => {
    const { id } = req.params
    const results = await Product.getBrandById(id)
    return res.status(200).json({
        data: results
    });
});

const getByCategory = catchError(async(req, res) => {
    const { array } = req.query
    const results = await Product.productsByCategory(array)
    return res.status(200).json({
        data: results[0]
    });
});

const getOne = catchError(async(req, res)=>{
    const { id } = req.params
    const result = await Product.findById(id)
    return res.status(200).json(result[0])
})

// const getSearch = catchError(async(req, res)=>{
//     const { page, limit, search } = req.query
//     const offset = (page - 1) * limit
//     const totalPagesData = await Product.findByUserSearchCount(limit, search)
//     const totalPages = Math.ceil(totalPagesData[0][0]?.count / limit)
//     const results = await Product.findByUserSearch(limit, offset, search)
//     return res.status(200).json({
//         data: results[0],
//         pagination: {
//             page: +page,
//             limit: +limit,
//             totalPages: totalPages,
//             totalProducts: totalPagesData[0][0]?.count
//         }
//     })
// })

const getSearch = catchError(async(req, res)=>{
    const { search } = req.query
    const results = await Product.findByUserSearch(search)
    return res.status(200).json({
        data: results[0],
    })
})

module.exports = {
    getAll,
    getOne,
    getSearch,
    getByCategory,
    getBrands,
    getProductsByBrands,
    getBrandById
}