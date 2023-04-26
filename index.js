import {Baraja} from "./js/baraja.js";
import {Juego} from "./js/juego.js";
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
let juego = new Juego(reglas);
const botonCarta = document.getElementById("botonCarta");
const botonReset = document.getElementById("botonReset");

let carta = document.getElementById("carta");
let puntuacionCartas = document.getElementById("puntuacionCartas");
let mensajeEstado = document.getElementById("mensajeEstado");
let ganadas = document.getElementById("ganadas");
let perdidas = document.getElementById("perdidas");
let totalPerdidas = 0;
let totalGanadas = 0;
botonCarta.onclick = function(){
    let elegida;
    elegida = juego.baraja.reparteCarta();
    carta.innerHTML += elegida.numero + " " + elegida.palo + " ";
    let valorC = juego.sieteYmedio(elegida);
    if(valorC > 7.5){
        puntuacionCartas.innerHTML = valorC;
        mensajeEstado.innerHTML = "Has perdido";
        botonCarta.disabled = true;
        totalPerdidas++;
        perdidas.innerHTML = totalPerdidas;
    }else if(valorC == 7.5){
        puntuacionCartas.innerHTML = valorC;
        mensajeEstado.innerHTML = "Has ganado";
        botonCarta.disabled = true;
        totalGanadas++;
        ganadas.innerHTML = totalGanadas;
    }else{
        puntuacionCartas.innerHTML = valorC;
    }
    
}

botonReset.onclick = function(){
    juego = new Juego(reglas);
    botonCarta.disabled = false;
    mensajeEstado.innerHTML = " ";
    puntuacionCartas.innerHTML = " ";

    carta.innerHTML = " ";

}
