import * as mongoose from 'mongoose';

export const FormularioSchema = new mongoose.Schema({

    responsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
    perguntas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pergunta', required: true }],
    respostas: [{ type: String }],
    data: { type: Date, required: true },
    resolvido: { type: Boolean, required: true, default: false },

}, { timestamps: true, collection: 'formularios' });

