const pool = require('../utils/connMySql2')

const findAll = async()=>{
    const result = await pool.query('SELECT * from productos ORDER BY CODIGO desc limit 50');
    console.log(result)
    return result
}

const findById = async(id)=>{
    const result = await pool.query('SELECT * from productos WHERE CODIGO='+id)
    console.log(result)
    return result
}

const findByProduct = async(search)=>{
    const result = await pool.query("SELECT * FROM productos WHERE PRODUCTO LIKE ?" + '%' + search + '%')
    console.log(result)
    return result
}

module.exports = {
    findAll,
    findById,
    findByProduct
}