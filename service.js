const url = require('url');

const { Pool, Client } = require('pg')
//const Calculator = require('./Calculator.js')

exports.calculatorRequest = function (req, res) {
    const urlAddress = decodeURI(req.url).split('=');
    let response = "";
    let result = '';
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'A',
        password: 'helpme',
        port: 5432,
    })
    pool.query('INSERT INTO my_table (id) VALUES(69)', (err, res) => {
        console.log(err, res)
        pool.end()
    })
    if (true) {
        result = "Dab"
        res.statusCode = 200;
        response = result.toString();
    }
    else{
        res.statusCode = 400;
        response = "Invalid Query";
    }
    res.setHeader('Content-Type', 'text/plain');
    res.end(response);
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};