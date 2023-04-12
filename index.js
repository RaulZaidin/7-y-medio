import {Carta} from "./js/carta.js";
import {Baraja} from "./js/baraja.js";
import {Numeros} from "./js/numerosRandom.js";
let cartas = new Carta();
let baraja = new Baraja();
let numeros = new Numeros();
const boton = document.getElementById("boton");
// boton.onclick = function(){
//     cartas.valorCartas(cartas.reparteCarta(numeros.random(40), 
//     numeros.random(4), barajaFinal, baraja.palos));
//     // cartas.valorLimite();
// }
let reglas = {
    "elementos" : [
        {
            "numero" : 10,
            "palo" : "todos",
            "valor" : 0.5
        },
        {
            "numero" : 11,
            "palo" : "todos",
            "valor" : 0.5
        },
        {
            "numero" : 12,
            "palo" : "todos",
            "valor" : 0.5
        }
    ]
}