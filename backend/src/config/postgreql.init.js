const path = require('node:path')
const {Sequelize} = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/postgreql.database.js')[env]


const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect, /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    logging: false,
});   

// with URI  
// const sequelize = new Sequelize('postgres://postgres:1829@localhost:5432/challenge_app') //postgres[ql]://[username[:password]@][host[:port],]/database[?parameter_list]


const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    sequelize,
    checkConnect
}