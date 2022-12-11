import express from "express";
import produtosRoute from "./src/routes/produtos.route.js";

const port = 3001;

const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/produtos', produtosRoute);

app.listen(port, () => {
    console.log('O servidor foi iniciado!');
});

