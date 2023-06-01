// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const Baraja = require('./baraja');

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


// defining an endpoint to return all ads
// app.get('/carta', (req, res) => {
//   res.send(baraja.reparteCarta());
// });
app.get('/carta', (req, res) => {
  // res.send(baraja.reparteCarta());
  console.log("hola");
});

app.post('/', (req, res) =>{
  const baraja = new Baraja(req.body);
  req.body.valores.forEach(element => {
    baraja.baraja.forEach(carta =>{
        if(carta.numero == element.numero){
            carta.valor = element.valor;
        }else{
            if(carta.valor == null){
                carta.valor = carta.numero;
            }
        }
    });
});
  console.log(baraja.reparteCarta());
  // res.send("adios");
})
// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});