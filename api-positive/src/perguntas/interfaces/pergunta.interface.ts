import { Document } from 'mongoose';

export interface Pergunta extends Document {
    pergunta: string;
    tipo: string;
    status: boolean;
}