import axios from 'axios'

// https://pokeapi.co/api/v2/pokemon
const Api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export default Api;