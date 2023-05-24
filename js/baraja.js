// import {Carta} from "./carta.js";
const Carta = require('./carta');

class Baraja{

    constructor(reglas){
        let barajaInicial = [];
        this.palo = ["Oros", "Copas", "Espadas", "Bastos"];
        
        this.palo.forEach(element => {
            for(let i = 1; i <= 12; i++){
                barajaInicial.push(new Carta(i, element));
            }
        });
        
        let filtro = barajaInicial.filter(carta => {
            reglas.descartes.forEach(element => {
                if(carta.numero == element.numero){
                    carta.valida = false;
                }
            })
        });
        
        this.baraja = barajaInicial.filter(carta => carta.valida == true);
        
    }
    reparteCarta(){
        let num = Math.floor(Math.random()*(this.baraja.length - 1));
        let carta = this.baraja[num];
        this.baraja = this.baraja.filter(carta => carta != this.baraja[num]);
        console.log(this.baraja);
        return carta;
    }
}

module.exports = Baraja;
// export {Baraja}