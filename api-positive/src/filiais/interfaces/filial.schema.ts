import * as mongoose from 'mongoose';

export const FilialSchema = new mongoose.Schema({

    cnpj: { type: String, required: true, unique: true },
    matriz: { type: Boolean, required: true },
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
    fatAnual: { type: Number },
    status: { type: Boolean, required: true, default: true },

}, { timestamps: true, collection: 'filiais' });