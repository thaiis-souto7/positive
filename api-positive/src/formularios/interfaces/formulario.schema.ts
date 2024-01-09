import * as mongoose from 'mongoose';

export const FormularioSchema = new mongoose.Schema({

    descricao: { type: String, required: true },
    responsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
    perguntas: [{
        pergunta: { type: mongoose.Schema.Types.ObjectId, ref: 'Pergunta', required: true },
    }],

}, { timestamps: true, collection: 'formularios' });

