import api from "./api";

async function criarUsuario({email, senha}){
    const response = await api.post('/usuarios', {email, senha})
    return response.data;
}

async function auth({email, senha}){
    const response = await api.post('/usuarios/auth', {email, senha})
    api.defaults.headers['token'] = response.data.token
    return response.data;
}


export { criarUsuario, auth }