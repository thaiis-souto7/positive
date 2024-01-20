import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
    funcionario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true  },
    logout: { type: Boolean, required: true, default: false },
}, { timestamps: true, collection: 'login' });
