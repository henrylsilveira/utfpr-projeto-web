import express from 'express';
import httpProxy from 'http-proxy';

const port= 2999;

const app = express();

app.use(express.json());

const SERVICES_API_URL = {
    USUARIOS: 'http://localhost:3002',
    PRODUTOS: 'http://localhost:3001'
}

function selecionarProxyHost(req) {
    if(req.path.startsWith('/produtos')) {
        return SERVICES_API_URL.PRODUTOS;
    } else if(req.path.startsWith('/usuarios')) {
        return SERVICES_API_URL.USUARIOS;
    }
}

app.use((req, res, next) => {
    httpProxy(selecionarProxyHost(req))(req, res, next)
})

app.listen(port, () => {
    console.log(`Serviço de API Gateway foi iniciado`);
})