import express from 'express';
import { store } from '../controllers/usuario.controller.js';

const usuariosRoute = express.Router();

usuariosRoute.post('/', store);

export default usuariosRoute;
