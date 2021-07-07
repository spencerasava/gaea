const express = require('express');
const path = require('path');
const morgan = require('morgan');
const colors = require('colors');
const axios = require('axios');

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(morgan('tiny'));

app.listen(PORT, () => {
  console.log('you have entered the matrix'.brightGreen);
})
