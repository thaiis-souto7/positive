"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerguntaSchema = void 0;
const mongoose = require("mongoose");
exports.PerguntaSchema = new mongoose.Schema({
    pergunta: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
}, { timestamps: true, collection: 'perguntas' });
//# sourceMappingURL=pergunta.schema.js.map