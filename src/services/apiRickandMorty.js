import axios from 'axios'

const apiRickandMorty = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
});

export default apiRickandMorty