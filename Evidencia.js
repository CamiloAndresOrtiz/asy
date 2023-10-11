const axios = require('axios')

const url = 'https://api.chucknorris.io/jokes/random'


async function peticion(){
    const { updated_at } = await axios.get(url)
    updated_at.docs.forEach(element => {
        console.log(element);
    });
}
peticion()

updated_at