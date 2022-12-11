import { Produto } from '../models/produto.model.js'; 

async function index(req, res) {
    // res.json({mensagem: "Olá"});
    const produtos = await Produto.findAll();
    res.json(produtos)
}

async function show(req, res) {
    const produto = await Produto.findByPk(req.params.id);
    res.json(produto);
}

async function store(req, res) {
    // res.json(req.body);
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
}

async function destroy(req, res) {
    const produto = await Produto.findByPk(req.params.id);
    await produto.destroy();
    res.send(produto);
}

async function update(req, res) {
    const produto = await Produto.findByPk(req.params.id);
    // await produto.update(req.body);
    produto.nome = req.body.nome    
    produto.preco = req.body.preco    
    produto.imagem = req.body.imagem    

    await produto.save();
    res.send(produto);
    // res.status(200).json(produto);
}

export { index, store, show, destroy, update };