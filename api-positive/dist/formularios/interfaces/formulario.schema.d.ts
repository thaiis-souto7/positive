import * as mongoose from 'mongoose';
export declare const FormularioSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    responsavel: mongoose.Types.ObjectId;
    perguntas: {
        pergunta: mongoose.Types.ObjectId;
    }[];
    descricao: string;
}>;
