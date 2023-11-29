import { Document } from 'mongoose';
import { Funcionario } from 'src/funcionarios/interfaces/funcionario.interface';
export interface Filial extends Document {
    readonly cnpj: string;
    matriz: boolean;
    nome: string;
    cep: string;
    rua: string;
    bairro: string;
    numero: number;
    cidade: string;
    estado: string;
    telefone: string;
    email: string;
    responsavel: Funcionario;
    segmento: string;
    numFunc: number;
    fatAnual: number;
    status: boolean;
}
