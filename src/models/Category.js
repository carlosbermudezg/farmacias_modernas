const pool = require('../utils/connMySql2')

const findAllCategory = async()=>{
    const result = await pool.query('SELECT * from productos_categorias limit 10');
    // const result = await pool.query('SELECT * FROM information_schema.tables');
    console.log(result)
    return result
}

// const findById = async(id)=>{
//     const result = await pool.query('SELECT * from productos WHERE CODIGO='+id)
//     console.log(result)
//     return result
// }

// const findByProduct = async(search)=>{
//     const result = await pool.query("SELECT * FROM productos WHERE PRODUCTO LIKE ?", '%' + search + '%')
//     console.log(result)
//     return result
// }

module.exports = {
    findAllCategory
}