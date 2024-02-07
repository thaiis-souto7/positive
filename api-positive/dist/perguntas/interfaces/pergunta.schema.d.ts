import * as mongoose from 'mongoose';
export declare const PerguntaSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: boolean;
    pergunta: string;
    tipo: string;
}>;
