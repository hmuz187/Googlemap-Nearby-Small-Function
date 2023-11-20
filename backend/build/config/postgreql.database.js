require('dotenv').config;
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": "postgres",
    "password": "1829",
    "database": "database_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "1829",
    "database": "database_production",
    "host": "localhost",
    "dialect": "postgres"
  }
};