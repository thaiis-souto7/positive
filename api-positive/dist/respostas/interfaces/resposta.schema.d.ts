import * as mongoose from 'mongoose';
export declare const RespostaSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    usuario: mongoose.Types.ObjectId;
    itens: {
        pergunta: mongoose.Types.ObjectId;
        resposta?: string;
    }[];
    resolvido: boolean;
    formulario_id: mongoose.Types.ObjectId;
}>;
