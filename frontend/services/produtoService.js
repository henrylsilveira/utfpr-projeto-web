import api from "./api";

async function getProdutos() {
    const response = await api.get("/produtos");
    const produtos = response.data();
    return produtos;
}

export { getProdutos }