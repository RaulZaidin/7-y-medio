import {Juego} from "./juego.js";
class Cliente{
    constructor(){
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
        this.juego = new Juego(reglas);
        
        var apiUrl="http://localhost:3001" ;
        
        fetch(apiUrl,{ 
            method: 'POST',  
            body: JSON.stringify(reglas),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then((response) => response)
            .then((json) => console.log(json));
    }
    async reparteCarta(){
        let promesa = await fetch("http://localhost:3001/carta");
        let dato = await promesa.json();
        console.log("ya tengo dato");
        console.log(dato);
        return dato;
    }
}

// module.exports = Cliente;
export {Cliente}