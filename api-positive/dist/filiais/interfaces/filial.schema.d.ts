import * as mongoose from 'mongoose';
export declare const FilialSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    email: string;
    status: boolean;
    cep: string;
    rua: string;
    bairro: string;
    numero: number;
    cidade: string;
    estado: string;
    telefone: string;
    responsavel: mongoose.Types.ObjectId;
    segmento: string;
    numFunc?: number;
    cnpj?: string;
}>;
