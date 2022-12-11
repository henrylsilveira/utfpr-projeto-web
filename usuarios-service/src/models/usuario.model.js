import { sequelize } from "../services/db.service.js";
import { DataTypes } from "sequelize"

const Usuario = sequelize.define('usuario', {
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

Usuario.sync();

export { Usuario };
