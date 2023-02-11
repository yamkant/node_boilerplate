'use strict';

const express = require('express');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME
  , process.env.DB_USER
  , process.env.DB_PASSWORD
  , {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }, {
    logging: (...msg) => console.log(msg),
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });



// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
