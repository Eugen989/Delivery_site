const connection = require('./db'); // Подключение к базе данных

connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;

    console.log(results); // Вывод результатов запроса
});