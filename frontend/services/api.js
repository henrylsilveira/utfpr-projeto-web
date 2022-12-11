import axios from 'axios'
// EXEMPLO
// const apiUsuario = axios.create({
//     baseURL: 'http://localhost:3002'
// })
// const apiProduto = axios.create({
//     baseURL: 'http://localhost:3001'
// })


// USANDO PROXY
const api = axios.create({
    baseURL: 'http://localhost:2999'
})

export default api