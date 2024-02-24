const mysql2 = require('mysql2/promise');

// Connect to server
const pool = mysql2.createPool({
    host     : "192.168.2.172",
    user     : "root",
    password : "miguel66677710101418/2=golosos",
    port     : "3306",
    database : "farmacia_lopez",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool