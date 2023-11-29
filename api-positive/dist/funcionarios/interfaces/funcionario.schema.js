"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioSchema = void 0;
const mongoose = require("mongoose");
exports.FuncionarioSchema = new mongoose.Schema({
    matricula: { type: String, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    cargo: { type: String, required: true },
    cargaHoraria: { type: Number, required: true },
    idade: { type: Number },
    nivelAcesso: { type: Number, required: true },
    dataAdmissao: { type: Date, required: true },
    promocoes: { type: String },
    status: { type: Boolean, required: true, default: true },
}, { timestamps: true, collection: 'funcionarios' });
//# sourceMappingURL=funcionario.schema.js.map