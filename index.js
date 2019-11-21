const hostname = '127.0.0.1';
const port = 3000;

const server = require('./controller.js');

// const { Pool, Client } = require('pg')
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'A',
//   password: 'helpme',
//   port: 5432,
// })
// pool.query('INSERT INTO my_table (id) VALUES(69)', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});