// async function getProdutos() {
//     const requisicao = await fetch("/produtos");
//     const produtos = await requisicao.json();
//     return produtos;
// }

// export { getProdutos }

import api from "./api";

async function getProdutos() {
    const response = await api.get("/produtos");
    const produtos = response.data();
    return produtos;
}

export { getProdutos }