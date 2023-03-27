import {Carta} from "./js/carta.js";
let cartas = new Carta();
const boton = document.getElementById("boton");
boton.onclick = function(){
    cartas.valorCartas(cartas.reparteCarta(cartas.random(), cartas.randomPalo()));
    cartas.valorLimite();
}
