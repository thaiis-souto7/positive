import * as mongoose from 'mongoose';

export const RespostaSchema = new mongoose.Schema({

    formulario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Formulario', required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
    itens: [{
        pergunta: { type: mongoose.Schema.Types.ObjectId, ref: 'Pergunta', required: true },
        resposta: String
    }],
    resolvido: { type: Boolean, required: true, default: false }

}, { timestamps: true, collection: 'respostas' });

