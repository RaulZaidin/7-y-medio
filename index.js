import {Carta} from "./js/carta.js";
import {Baraja} from "./js/baraja.js";
import {Numeros} from "./js/numerosRandom.js";
import {Juego} from "./js/juego.js";
let baraja = new Baraja();
let numeros = new Numeros();
let juego = new Juego();
const boton = document.getElementById("boton");
// boton.onclick = function(){
//     cartas.valorCartas(cartas.reparteCarta(numeros.random(40), 
//     numeros.random(4), barajaFinal, baraja.palos));
//     // cartas.valorLimite();
// }
let carta = document.getElementById("carta");
let valor = document.getElementById("valor");
boton.onclick = function(){
    let elegida = baraja.reparteCarta(numeros.random(40));
    carta.innerHTML += elegida.numero + " " + elegida.palo + " ";
    let valorC = juego.sieteYmedio(elegida.numero);
    valor.innerHTML = valorC;
}
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