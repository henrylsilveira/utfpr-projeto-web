import api from "./api";

async function criarUsuario({email, senha}){
    const response = await api.post('/usuarios', {email, senha})
    return response.data;
}

export { criarUsuario }