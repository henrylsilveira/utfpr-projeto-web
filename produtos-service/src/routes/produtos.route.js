import express from 'express';
import { index, store, show, destroy, update } from '../controllers/produtos.controller.js';

const produtosRoute = express.Router();

produtosRoute.get('/', index);
produtosRoute.get('/:id', show);
produtosRoute.post('/', store);
produtosRoute.delete('/:id', destroy);
produtosRoute.put('/:id', update);

export default produtosRoute;

/*
-GET /produtos -> lista de produtos
-GET /produtos/:id -> retornar dados de produto específico
-POST /produtos -> criar novo produto 
-PUT /produtos/:id -> atualizar dados de produto com id específico
-DELETE /produtos/:id -> excluir dados de produto com id específico 
*/
