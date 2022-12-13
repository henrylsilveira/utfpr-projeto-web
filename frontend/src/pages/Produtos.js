import Produto from "../components/Produto";
import { getProdutos } from "../services/ProdutoService";
import { useState, useEffect } from "react";

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        getProdutos().then((produtos) => {
            setProdutos(produtos);
        });
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            {produtos.length ? (
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
                    {produtos.map((produto, index) => (<Produto key={index} dadosProdutos={produto} />))}
                </div>
            ) : (
                <h3>Sem produtos para serem visualizados</h3>
            )}
        </div>
    );
}  