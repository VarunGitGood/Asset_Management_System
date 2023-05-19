const mysql=require('mysql');
const dot = require("dotenv")
dot.config({ path: "./config/config.env" });
const connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_DBNAME,
    multipleStatements: true
});

module.exports=connection;  