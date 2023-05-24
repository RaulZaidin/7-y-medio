// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const Baraja = require('./baraja');
const Carta = require('./carta');

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

let reglas = {
  valores : [
      {
          numero : 10,
          palo : "todos",
          valor : 0.5
      },
      {
          numero : 11,
          palo : "todos",
          valor : 0.5
      },
      {
          numero : 12,
          palo : "todos",
          valor : 0.5
      }
  ],
  descartes : [
      {
          numero : 8,
          palo : "todos"
      },
      {
          numero : 9,
          palo: "todos"
      }
  ]
}
const baraja = new Baraja(reglas);

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(baraja.reparteCarta());
});
app.get('/array', (req, res) => {
    res.send("{elemento:'milista',valor:'"+lista.pop()+"'}");
  });

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});