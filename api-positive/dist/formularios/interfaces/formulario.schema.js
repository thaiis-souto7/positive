"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioSchema = void 0;
const mongoose = require("mongoose");
exports.FormularioSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    responsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario' },
    itens: [{
            pergunta: { type: mongoose.Schema.Types.ObjectId, ref: 'Pergunta', required: true },
            resposta: String
        }],
    resolvido: { type: Boolean, required: true, default: false },
}, { timestamps: true, collection: 'formularios' });
//# sourceMappingURL=formulario.schema.js.map