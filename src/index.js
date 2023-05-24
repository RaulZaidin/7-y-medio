// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const Baraja = require('../js/baraja');

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));
var lista = ['platano', 'manzana'];
const baraja = new Baraja();

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send();
});
app.get('/array', (req, res) => {
    res.send("{elemento:'milista',valor:'"+lista.pop()+"'}");
  });

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});