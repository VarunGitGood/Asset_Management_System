const mysql = require('mysql')
const colors = require('colors')
const connection = async () => {

    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'assetmanagementsystem'
    });

    conn.connect(function(err) {
        if (err) {
          return console.error(`error: ${err.message}`.bold.red);
        }
      
        console.log('Connected to the MySQL server.'.bold.yellow);
      })
}

module.exports = connection;