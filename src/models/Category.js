const pool = require('../utils/connMySql2')

const findAllCategory = async()=>{
    const result = await pool.query('SELECT * from productos_categorias');
    return result
}

const findCategoryById = async(id)=>{
    const result = await pool.query('SELECT * from productos_categorias WHERE CATEGORIA_ID='+id)
    return result
}

module.exports = {
    findAllCategory,
    findCategoryById
}