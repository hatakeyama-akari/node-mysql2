const config = require('config');

testWithBluebird();

async function testWithBluebird() {
  // get the client
  const mysql = require('mysql2/promise');

  // get the promise implementation, we will use bluebird
  const bluebird = require('bluebird');

  // create the connection, specify bluebird as Promise
  const connection = await mysql.createConnection({
    ...config.mysql,
    Promise: bluebird,
  });

  // query database
  const [rows, fields] = await connection.execute('select ?+? as sum', [2, 3]);
  console.log(rows);

  connection.end();
}

console.log('kitayo');
