import axios from "axios";

const url = 'https://pokeapi.co/api/v2/pokemon'


async function peticion(){
    const { data } = await axios.get(url)
    data.results.forEach(element => {
        console.log(element);
    });
}
peticion()