import {Carta} from "./carta.js";

class Baraja{

    constructor(){
        this.baraja = [];
        this.palo = ["Oros", "Copas", "Espadas", "Bastos"];
        
        let j = 1;
        let z = 0;
        for(let i = 0; i < 48; i++){
            if(j > 12){
                j = 1;
                z++;
            }
            var carta = new Carta(j, this.palo[z]);
            this.baraja[i]= (carta);
            j++;
        }
        
        let filtro = this.baraja.filter(carta => (carta.numero > 7 && carta.numero < 10));
        
        let filtro2 = this.baraja.filter(carta => {
            for(let i = 0; i < filtro.length; i++){
                if(carta == filtro[i]){
                    carta.valida = false;
                }
            }
        });
        
        this.barajaFinal = this.baraja.filter(carta => carta.valida == true);
        
    }
    reparteCarta(){
        let num = Math.floor(Math.random()*(this.barajaFinal.length - 1));
        let carta = this.barajaFinal[num];
        this.barajaFinal = this.barajaFinal.filter(carta => carta != this.barajaFinal[num]);
        console.log(this.barajaFinal);
        return carta;
    }
}

export {Baraja}