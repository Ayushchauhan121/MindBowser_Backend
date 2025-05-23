const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'Kd4-86661-ayush',
  password: 'ayush123',
  database: 'blog_db'
});

const connectDB = () => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('MySQL Connected');
    connection.release();
  });
};

module.exports = { pool, connectDB };
