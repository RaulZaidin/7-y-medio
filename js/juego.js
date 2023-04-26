import {Baraja} from "./baraja.js";

class Juego{
    constructor(reglas){
        this.sistema = null;
        this.suma = [];
        this.baraja = new Baraja(reglas);
        reglas.valores.forEach(element => {
            this.baraja.baraja.forEach(carta =>{
                if(carta.numero == element.numero){
                    carta.valor = element.valor;
                }else{
                    if(carta.valor == null){
                        carta.valor = carta.numero;
                    }
                }
            });
        });
        
        console.log(this.baraja.baraja);
    }
    sieteYmedio(carta){
        let resultado = 0; 
        this.suma.push(carta.valor);  
        this.suma.forEach(puntuacion =>{
            resultado += puntuacion;
        });    
        return resultado;
    }
}

export {Juego}