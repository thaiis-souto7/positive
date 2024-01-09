import { Model } from 'mongoose';
import { AtualizarFilialDto } from './dtos/atualizar-filial.dto';
import { CriarFilialDto } from './dtos/criar-filial.dto';
import { Filial } from './interfaces/filial.interface';
export declare class FiliaisService {
    private readonly filialModel;
    private readonly logger;
    constructor(filialModel: Model<Filial>);
    createFilial(criarFilialDto: CriarFilialDto): Promise<Filial>;
    updateFilial(_id: string, atualizarFilialDto: AtualizarFilialDto): Promise<void>;
    getAllFilial(): Promise<Filial[]>;
    getFilialById(_id: string): Promise<Filial>;
    deleteFilial(_id: string): Promise<any>;
}
