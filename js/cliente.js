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
}

// module.exports = Cliente;
export {Cliente}