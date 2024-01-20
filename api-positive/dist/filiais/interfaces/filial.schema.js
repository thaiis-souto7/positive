"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilialSchema = void 0;
const mongoose = require("mongoose");
exports.FilialSchema = new mongoose.Schema({
    cnpj: { type: String, unique: true },
    nome: { type: String, required: true },
    cep: { type: String, required: true },
    rua: { type: String, required: true },
    bairro: { type: String, required: true },
    numero: { type: Number, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true },
    responsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
    segmento: { type: String, required: true },
    numFunc: { type: Number },
    status: { type: Boolean, required: true, default: true },
}, { timestamps: true, collection: 'filiais' });
//# sourceMappingURL=filial.schema.js.map