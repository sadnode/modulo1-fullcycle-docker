const express = require('express');

const app = express();

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql  = `INSERT INTO people(name) VALUES('Igor')`;

connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    return res.send('<h1>Full Cycle</h1>');
});

app.listen(3000, () => {
    console.log('Running 3000');
});