class Juego{
    constructor(){
        this.suma = [];
    }
    sieteYmedio(num){
        let resultado = 0;
        if(num <= 7){
            this.suma.push(num);
            for(let i = 0; i < this.suma.length; i++){
                resultado += this.suma[i];
            }
        }else{
            this.suma.push(0.5);
            for(let i = 0; i < this.suma.length; i++){
                resultado += this.suma[i];
            }
        }
        return resultado;
    }
}

export {Juego}