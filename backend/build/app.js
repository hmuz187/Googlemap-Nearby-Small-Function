const express = require('express');
const app = express();
const path = require('node:path');
const cors = require('cors');
const dotenv = require('dotenv');

//init middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
  limit: '30mb'
}));
app.use(express.static(path.join(__dirname + './public')));
dotenv.config();

//check cor api
app.use(cors());

// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers',  'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

//init database
require('./config/postgreql.init.js').checkConnect();

//init routes

app.use('', require('./routes/index'));
module.exports = app;