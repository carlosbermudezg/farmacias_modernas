const pool = require('../utils/connMySql2')

// const allProductsPagination = async(limit, offset)=>{
//     const result = await pool.query('SELECT CANTIDAD, PRODUCTO from productos limit ? offset ?', [+limit, +offset]);
//     return result
// }
// CANTIDAD, PRODUCTO, CATEGORIA, b1, b2
// CANTIDAD, PRODUCTO, CATEGORIA, COSTO, b1, b2
const allProductsPagination = async()=>{
    const result = await pool.query("SELECT * from productos WHERE CATEGORIA NOT IN (12,1,211,202,213,13,191,2,203,198,200,201,208,212,37)");
    return result
}

const productsByCategory = async(array)=>{
    const result = await pool.query('SELECT CANTIDAD, PRODUCTO, CATEGORIA, COSTO, MARCA, b1, b2 from productos WHERE CATEGORIA IN ' + array );
    return result
}
const getBrands = async()=>{
    // SHOW TABLES FROM farmacia_lopez
    const result = await pool.query('SELECT * from productos_marcas');
    return result[0]
}
const getBrandById = async(id)=>{
    const result = await pool.query('SELECT * from productos_marcas WHERE marca_ID='+id);
    return result[0]
}
const getProductsByBrands = async(brands)=>{
    const result = await pool.query("SELECT * from productos WHERE MARCA IN " + brands);
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
    const result = await pool.query("SELECT CANTIDAD, PRODUCTO, CATEGORIA, COSTO, MARCA, b1, b2 FROM productos WHERE PRODUCTO LIKE '%"+search+"%'")
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
    productsByCategory,
    getBrands,
    getProductsByBrands,
    getBrandById
}