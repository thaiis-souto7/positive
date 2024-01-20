"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioSchema = void 0;
const mongoose = require("mongoose");
exports.FormularioSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    responsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
    perguntas: [{
            pergunta: { type: mongoose.Schema.Types.ObjectId, ref: 'Pergunta', required: true },
        }],
}, { timestamps: true, collection: 'formularios' });
//# sourceMappingURL=formulario.schema.js.map