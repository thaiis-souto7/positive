import * as mongoose from 'mongoose';

export const FuncionarioSchema = new mongoose.Schema({
    matricula: { type: String, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    cargo: { type: String, required: true },
    cargaHoraria: { type: Number, required: true },
    idade: { type: Number },
    nivelAcesso: { type: Number, required: true },
    dataAdmissao: { type: Date, required: true },
    promocoes: { type: String  },
    status: { type: Boolean, required: true, default: true },
}, { timestamps: true, collection: 'funcionarios' });
