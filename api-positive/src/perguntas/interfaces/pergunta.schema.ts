import * as mongoose from 'mongoose';

export const PerguntaSchema = new mongoose.Schema({
    pergunta: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
}, { timestamps: true, collection: 'perguntas' });
