const pool = require('../utils/connMySql2')

// const allProductsPagination = async(limit, offset)=>{
//     const result = await pool.query('SELECT CANTIDAD, PRODUCTO from productos limit ? offset ?', [+limit, +offset]);
//     return result
// }

const allProductsPagination = async()=>{
    const result = await pool.query('SELECT CANTIDAD, PRODUCTO, CATEGORIA from productos');
    return result
}

const productsByCategory = async(array)=>{
    const result = await pool.query('SELECT CANTIDAD, PRODUCTO, CATEGORIA from productos WHERE CATEGORIA IN ' + array );
    return result
}
const countProducts = async()=>{
    const result = await pool.query('SELECT count(*) as count from productos');
    return result
}

const findById = async(id)=>{
    const result = await pool.query('SELECT * from productos WHERE CODIGO='+id)
    return result
}

// const findByUserSearch = async(limit, offset, search)=>{
//     const result = await pool.query("SELECT CANTIDAD, PRODUCTO FROM productos WHERE PRODUCTO LIKE '%"+search+"%' limit "+limit+" offset " +offset)
//     return result
// }
const findByUserSearch = async(search)=>{
    const result = await pool.query("SELECT CANTIDAD, PRODUCTO, CATEGORIA FROM productos WHERE PRODUCTO LIKE '%"+search+"%'")
    return result
}
const findByUserSearchCount = async(limit, search)=>{
    const result = await pool.query("SELECT count(*) as count FROM productos WHERE PRODUCTO LIKE '%"+search+"%' limit "+limit+" offset 0")
    return result
}
module.exports = {
    allProductsPagination,
    findById,
    findByUserSearch,
    countProducts,
    findByUserSearchCount,
    productsByCategory
}