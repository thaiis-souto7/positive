import { Document } from 'mongoose';

export interface Funcionario extends Document {
    readonly matricula: string;
    nome: string;
    email: string;
    cargo: string;
    cargaHoraria: number;
    idade: number;
    nivelAcesso: number;
    dataAdmissao: Date;
    promocoes: string;
    status: boolean;
}