const express = require('express');
const log = console.log;
const PORT = process.env.PORT || 8080;
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'task_saver_db'
});

connection.connect();




app.get('/', (req, res) => {
    connection.query('SELECT * FROM Orders', function (error, results) {
        if (error) {
            return res.status(500).json({ message: 'Internal Server error' });
        }
        res.json(results);
    });
});

app.listen(PORT, () => log('Server is starting at ', PORT));