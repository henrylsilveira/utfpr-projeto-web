import { sequelize } from "../services/db.service.js";
import { DataTypes } from "sequelize"

const Produto = sequelize.define('produtos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING
    }
});

Produto.sync();

export { Produto };
