import { Usuario } from '../models/usuario.model.js'; 

async function store(req, res) {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
}

export { store }