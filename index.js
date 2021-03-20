const config = require('config');

main();

async function main() {
  // get the client
  const mysql = require('mysql2/promise');
  // create the connection
  const connection = await mysql.createConnection({
    ...config.mysql,
  });

  // query database
  const [
    rows,
    fields,
  ] = await connection.query(
    'SELECT * FROM `category_master` WHERE `category_id` = ? OR `category_name` = ?',
    [2, 'leisure']
  );
  console.log(rows);

  connection.end();

  console.log('kitayo');
}
