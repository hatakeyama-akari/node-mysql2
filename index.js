const config = require('config');

poolExample();

async function poolExample() {
  // get the client
  const mysql = require('mysql2/promise');
  // create the connection
  const pool = await mysql.createConnection({
    ...config.mysql,
  });

  // query database
  await Promise.all([pool.query('select sleep(10)'), pool.query('select sleep(5)')]);
  console.log('15 seconds after');

  await pool.end();

  console.log('kitayo');
}
