require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || 'localhost',
      port: process.env.PG_PORT || 5432,
      user: process.env.PG_USER || 'postgres',
<<<<<<< HEAD
      password: process.env.PG_PASS || 'pass10',
      database: process.env.PG_DB || 'postgres',
=======
      password: process.env.PG_PASS || 'postgres',
      database: process.env.PG_DB || 'second_wind',
>>>>>>> 6747026d1221c6f9180a8e22de92d168f919d534
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
      stub: path.join(__dirname, 'migration-stub.js'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || '127.0.0.1',
      port: process.env.PG_PORT || 5432,
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASS || 'postgres',
      database: process.env.database || 'postgres',
    },
  },
};