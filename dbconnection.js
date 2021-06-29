const mysql = require('mysql')


const db = {
        connection : mysql.createConnection({
        host:process.env.HOST,
        port:process.env.PORT,
        user:process.env.DBUSER,
        database:process.env.DATABASE,
        password:process.env.DBPASSWORD        
    })
}


module.exports = db;