import * as mongoose from 'mongoose';
export declare const FuncionarioSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    email: string;
    cargo: string;
    cargaHoraria: number;
    nivelAcesso: number;
    matricula: string;
    dataAdmissao: Date;
    status: boolean;
    idade?: number;
    promocoes?: string;
}>;
