const mysql = require('mysql')


const db = {
        connection : mysql.createConnection({
        host:process.env.HOST,
        port:process.env.PORT,
        database:process.env.DATABASE,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD   
    })
}


module.exports = db;