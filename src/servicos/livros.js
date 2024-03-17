import axios from "axios";

const liivrosAPI = axios.create({baseURL: 'http://localhost:8000/livro'})

async function getLivros(){
    const response = await liivrosAPI.get('/')

    return response.data;
}

export {
    getLivros
}