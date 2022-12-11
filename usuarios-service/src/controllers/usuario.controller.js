import { Usuario } from '../models/usuario.model.js'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

async function store(req, res) {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
}

async function auth(req, res) {
    const {email, senha} = req.body

    if(!(email && senha)) {
        return res.status(400).send('Informe o email e a senha.');
    }

    const usuario = await Usuario.findOne({ where: {email: email} })

    if(!usuario || !(bcrypt.compare(senha, usuario.senha))) {
        return res.status(400).send('Usuário ou senha incorretos.');
    }

    const token = jwt.sign({idUsuario: usuario.id}, "SECRET", {
        expiresIn: "1d"
    })

    return res.status(200).json({token, ...usuario.get()});
}

async function me(req, res) {
    return res.status(200).json(req.usuario)
}

export { store, auth, me }