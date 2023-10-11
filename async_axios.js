const axios = require("axios")
const url = 'https://jsonplaceholder.typicode.com/todos'


async function leertitulo(){
    const respuesta = await axios.get(url)
    respuesta.data.forEach(element => {
        console.log(element.id)
        console.log(element.title)
        console.log("----------------")
    });
}

leertitulo()

