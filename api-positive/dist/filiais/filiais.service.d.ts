import { Model } from 'mongoose';
import { AtualizarFilialDto } from './dtos/atualizar-filial.dto';
import { CriarFilialDto } from './dtos/criar-filial.dto';
import { Filial } from './interfaces/filial.interface';
export declare class FiliaisService {
    private readonly filialModel;
    private readonly logger;
    constructor(filialModel: Model<Filial>);
    createFunc(criarFilialDto: CriarFilialDto): Promise<Filial>;
    updateFunc(_id: string, atualizarFilialDto: AtualizarFilialDto): Promise<void>;
    getAllFunc(): Promise<Filial[]>;
    getFuncById(_id: string): Promise<Filial>;
    deleteFunc(_id: string): Promise<any>;
}
