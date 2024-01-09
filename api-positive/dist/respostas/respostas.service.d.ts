import { Model } from 'mongoose';
import { AtualizarRespostaDto } from './dtos/atualizar-resposta.dto';
import { CriarRespostaDto } from './dtos/criar-resposta.dto';
import { Resposta } from './interfaces/resposta.interface';
export declare class RespostaService {
    private readonly respostaModel;
    private readonly logger;
    constructor(respostaModel: Model<Resposta>);
    countAllResp(): Promise<number>;
    createResp(criarRespostaDto: CriarRespostaDto): Promise<Resposta>;
    updateResp(_id: string, atualizarRespostaDto: AtualizarRespostaDto): Promise<void>;
    getAllResp(): Promise<Resposta[]>;
    getRespById(_id: string): Promise<Resposta>;
    deleteResp(_id: string): Promise<any>;
}
