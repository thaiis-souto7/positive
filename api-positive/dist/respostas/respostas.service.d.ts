import { Model } from 'mongoose';
import { AtualizarRespostaDto } from './dtos/atualizar-resposta.dto';
import { CriarRespostaDto } from './dtos/criar-resposta.dto';
import { Resposta } from './interfaces/resposta.interface';
export declare class RespostaService {
    private readonly respostaModel;
    private readonly logger;
    constructor(respostaModel: Model<Resposta>);
    createFunc(criarRespostaDto: CriarRespostaDto): Promise<Resposta>;
    updateFunc(_id: string, atualizarRespostaDto: AtualizarRespostaDto): Promise<void>;
    getAllFunc(): Promise<Resposta[]>;
    getFuncById(_id: string): Promise<Resposta>;
    deleteFunc(_id: string): Promise<any>;
}
