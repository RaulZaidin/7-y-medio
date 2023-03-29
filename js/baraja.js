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
        
        for(let i = 0; i < 48; i++){
            this.baraja[i]= i + 1;
        }
        
    }
}

export {Baraja}