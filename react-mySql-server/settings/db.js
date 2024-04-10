const mysql = require("mysql");
const env = require("../dbenv")

const connection = mysql.createConnection({
    host: env.HOST,
    port: env.PORT,
    user: env.DBUSER,
    password: env.DBPASSWORD,
    database: env.DBNAME
})

connection.connect((error) => {
    if(error) {
        return console.log("Ошибка подключения к бд", error);
    } else {
        return console.log("Подключение к бд удалось")