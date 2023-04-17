import {Carta} from "./carta.js";

class Baraja{

    constructor(){
        this.baraja = [];
        // let j = 1;
        // for(let i=0; i < 40; i++){
        //     if(j <= 7){
        //         this.baraja [i] = j;
                
        //     }else if(j <= 10 && j > 7){
        //         this.baraja [i] = j + 2;
                
        //     }else if(j = 11){
        //         j = 1;
        //         this.baraja [i] = j;
        //     }
        //     j++;
        // }
        
        let j = 1;
        let z = 0;
        for(let i = 0; i < 48; i++){
            var carta = new Carta();
            if(j > 12){
                j = 1;
                z++;
            }
            carta.numero = j;
            carta.palo = carta.palo[z];
            this.baraja[i]= (carta);
            j++;
        }
        
        let filtro = this.baraja.filter(carta => (carta.numero > 7 && carta.numero < 10));
        
        let filtro2 = this.baraja.filter(carta => {
            for(let i = 0; i < filtro.length; i++){
                if(carta == filtro[i]){
                    carta.booleano = false;
                }
            }
        });
        
        this.filtro3 = this.baraja.filter(carta => carta.booleano == true);
        console.log(this.filtro3);
        
    }
    reparteCarta(num){
        return this.filtro3[num];
        
    }
}

export {Baraja}