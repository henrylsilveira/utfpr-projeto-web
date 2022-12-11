import express from 'express';
import { store, auth, me } from '../controllers/usuario.controller.js';
import authorize from '../middleware/authorize.js'

const usuariosRoute = express.Router();

usuariosRoute.post('/', store);
usuariosRoute.post('/auth', auth);


usuariosRoute.get('/me', authorize, me);

export default usuariosRoute;
