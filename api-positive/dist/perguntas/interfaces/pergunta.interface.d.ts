import { Document } from 'mongoose';
export interface Pergunta extends Document {
    pergunta: string;
    status: boolean;
}
