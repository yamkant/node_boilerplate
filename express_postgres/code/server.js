'use strict';

const express = require('express');
const pg = require('pg');

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const client = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  max: 5
})

client.connect(err => {
  if (err) {
    console.log('Failed to connect db ' + err);
  } else {
    console.log('Connect to db done!');
  }
})

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
