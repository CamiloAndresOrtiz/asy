const needle = require("needle");

const url = `https://pokeapi.co/api/v2/pokemon`


needle('get', url, {json: true})
    .then((req)=>{
        let pokemons = req.body
        pokemons.forEach(poke => {
         console.log(poke.name);
         console.log("---------------------------------------------");
        });
    })
    .catch((err)=>{
        console.log(err);
    })