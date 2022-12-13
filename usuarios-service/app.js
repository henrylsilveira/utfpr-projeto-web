import express from "express";
import usuariosRoute from "./src/routes/usuarios.route.js";
import cors from 'cors'

const port = 3002;

const app = express();

app.use(express.json()); 
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/usuarios', usuariosRoute);

app.listen(port, () => {
    console.log('O servidor de usuarios foi iniciado!');
});

