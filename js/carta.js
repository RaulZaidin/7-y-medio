class Carta {

    constructor(){
        this.suma = [];
        this.cartasEscogidas = [];
        this.palos = ["Oros", "Copas", "Espadas", "Bastos"];
        const puntuacion = 0;
    }

    // random(){
    //     return Math.floor(Math.random()*40);
    // }
    // randomPalo(){
    //     return Math.floor(Math.random()*4);
    // }
    
    reparteCarta(num, num2, baraja, palos){
        let cart = document.getElementById("carta");
        if(this.cartasEscogidas.indexOf(baraja[num] + palos[num2]) == -1){
            cart.innerHTML += " "+baraja[num] + " "+ palos[num2];
            this.cartasEscogidas.push(baraja[num] + palos[num2]);
            return baraja[num];
        }else{
            // this.reparteCarta(this.random, this.randomPalo);
            console.log("Carta repetida");
        }
        
    }
    // valorCartas(num){
    //     let valor = document.getElementById("valor");
    //     let resultado = 0;
    //     if(num <= 7){
    //         this.suma.push(num);
    //         for(let i = 0; i < this.suma.length; i++){
    //             resultado += this.suma[i];
    //         }
    //         valor.innerHTML = resultado;
    //     }else{
    //         this.suma.push(0.5);
    //         for(let i = 0; i < this.suma.length; i++){
    //             resultado += this.suma[i];
    //         }
    //         valor.innerHTML = resultado;
    //     }
    // }

    
}


export {Carta}