const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.USER,
  password:process.env.PASSWORD,
  host: "localhost",
  database:process.env.DATABASE,
  port: 5432,
});

module.exports = pool;
