import * as mongoose from 'mongoose';
export declare const LoginSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    logout: boolean;
    funcionario_id: mongoose.Types.ObjectId;
}>;
