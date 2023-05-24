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

const boton7ymedio = document.getElementById("boton7ymedio");
const botonBurro = document.getElementById("botonBurro");

let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");
let titulo3 = document.getElementById("titulo3");
let titulo4 = document.getElementById("titulo4");
let titulo5 = document.getElementById("titulo5");

botonCarta.style.display = 'none';
botonReset.style.display = 'none';
titulo1.style.display = 'none';
titulo2.style.display = 'none';
titulo3.style.display = 'none';
titulo4.style.display = 'none';
titulo5.style.display = 'none';
// juego.sistema = 2; //problema de que no obtiene un valor de sistema
boton7ymedio.onclick = function(){
    juego.sistema = 1; //Para diferenciar el tipo de juego los divido en 1 para 7ymedio y 2 para el burro
    botonCarta.style.display = 'block';
    botonReset.style.display = 'block';
    boton7ymedio.style.display = 'none';
    botonBurro.style.display = 'none';
    titulo1.style.display = 'inline-block';
    titulo2.style.display = 'inline-block';
    titulo3.style.display = 'inline-block';
    titulo4.style.display = 'inline-block';
}
botonBurro.onclick = function(){
    juego.sistema = 2; 
    botonCarta.style.display = 'block';
    botonReset.style.display = 'block';
    boton7ymedio.style.display = 'none';
    botonBurro.style.display = 'none';
    titulo1.style.display = 'inline-block';
    titulo5.style.display = 'inline-block';
    titulo3.style.display = 'inline-block';
    titulo4.style.display = 'inline-block';
}

let carta = document.getElementById("carta");
let puntuacionCartas = document.getElementById("puntuacionCartas");
let contadorCartas = document.getElementById("contadorCartas");
let mensajeEstado = document.getElementById("mensajeEstado");
let ganadas = document.getElementById("ganadas");
let perdidas = document.getElementById("perdidas");
let totalPerdidas = 0;
let totalGanadas = 0;


botonCarta.onclick = function(){
    if(juego.sistema == 1){
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
    }else{
        let elegida;
        elegida = juego.baraja.reparteCarta();
        carta.innerHTML += elegida.numero + " " + elegida.palo + " ";
        let cartaContador = juego.burro();
        if(elegida.numero == cartaContador){
            contadorCartas.innerHTML = cartaContador;
            mensajeEstado.innerHTML = "Has perdido";
            botonCarta.disabled = true;
            totalPerdidas++;
            perdidas.innerHTML = totalPerdidas;
        }else{
            contadorCartas.innerHTML = cartaContador;
        }
    }
    
}
botonReset.onclick = function(){
    if(juego.sistema == 1){
        juego = new Juego(reglas);
        juego.sistema = 1;
    }else{
        juego = new Juego(reglas);
        juego.sistema = 2;
    }
    botonCarta.disabled = false;
    mensajeEstado.innerHTML = " ";
    puntuacionCartas.innerHTML = " ";
    contadorCartas.innerHTML = " ";
    carta.innerHTML = " ";

}