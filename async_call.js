import axios from "axios";
import request from "request";

// const algo = async() =>{
//     try {
//         const peticion = await axios.get("https://rickandmortyapi.com/api/character")
//         console.log(peticion.data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// algo()

const url = `https://fakestoreapi.com/products`

const r = request.get(url, {json: true}, (err,req,body) => {
    if(erro){
        console.log(erro);
    }else{
       let catalogo = body.results
       catalogo.forEach(precio => {
        console.log(precio.price);
        console.log("---------------------------------------------");
       });
    }
})