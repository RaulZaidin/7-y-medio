class Carta {

    constructor(){
        this.baraja = [];
        let j = 1;
        for(let i=0; i < 40; i++){
            if(j <= 7){
                this.baraja [i] = j;
                
            }else if(j <= 10 && j > 7){
                this.baraja [i] = j + 2;
                
            }else if(j = 11){
                j = 1;
                this.baraja [i] = j;
            }
            j++;
        }
        this.palos = ["Oros", "Copas", "Espadas", "Bastos"];
        this.suma = [];
        this.valorFinal = 0;
        this.cartasEscogidas = [];
    }

    random(){
        return Math.floor(Math.random()*40);
    }
    randomPalo(){
        return Math.floor(Math.random()*4);
    }
    
    reparteCarta(num, num2){
        let cart = document.getElementById("carta");
        cart.innerHTML += " "+this.baraja[num] + " "+ this.palos[num2];
        if(this.cartasEscogidas.indexOf(this.baraja[num] + this.palos[num2]) == -1){
            this.cartasEscogidas.push(this.baraja[num] + this.palos[num2]);
            return this.baraja[num];
        }else{
            this.reparteCarta(this.random, this.randomPalo);
        }
        
    }
    valorCartas(num){
        let valor = document.getElementById("valor");
        let resultado = 0;
        if(num <= 7){
            this.suma.push(num);
            for(let i = 0; i < this.suma.length; i++){
                resultado += this.suma[i];
            }
            valor.innerHTML = resultado;
        }else{
            this.suma.push(0.5);
            for(let i = 0; i < this.suma.length; i++){
                resultado += this.suma[i];
            }
            valor.innerHTML = resultado;
        }
        this.valorFinal = resultado;
    }

    valorLimite(){
        if(this.valorFinal >= 8){
            
        }
    }
    
}


export {Carta}