import {Baraja} from "./js/baraja.js";
import {Juego} from "./js/juego.js";
let baraja = new Baraja();
let juego = new Juego();
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
    elegida = baraja.reparteCarta();
    carta.innerHTML += elegida.numero + " " + elegida.palo + " ";
    let valorC = juego.sieteYmedio(elegida.numero);
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
    baraja = new Baraja();
    botonCarta.disabled = false;
    mensajeEstado.innerHTML = " ";
    puntuacionCartas.innerHTML = " ";
    juego.suma = [];

    carta.innerHTML = " ";

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