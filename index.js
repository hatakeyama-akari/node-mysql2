const mysql = require('mysql2');
const config = require('config');

const connection = mysql.createConnection({
  ...config.mysql,
});

connection.execute(
  'SELECT * FROM `category_master` WHERE `category_id` = ? OR `category_name` = ?',
  [2, 'leisure'],
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available

    // If you execute same statement again, it will be picked from a LRU cache
    // which will save query preparation time and give better performance
  }
);

connection.execute('select 1 + ? + ? as result', [5, 6], (err, rows) => {
  console.log(rows);
  // rows: [ { result: 12 } ]
  // internally 'select 1 + ? + ? as result' is prepared first. On subsequent calls cached statement is re-used
});

connection.unprepare('select 1 + ? + ? as result');

connection.end();

console.log('kitayo');
