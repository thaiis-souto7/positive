import { AtualizarRespostaDto } from './dtos/atualizar-resposta.dto';
import { CriarRespostaDto } from './dtos/criar-resposta.dto';
import { RespostaService } from './respostas.service';
import { Resposta } from './interfaces/resposta.interface';
export declare class RespostasController {
    private readonly resposta;
    constructor(resposta: RespostaService);
    getCountResp(): Promise<number>;
    createResp(criarRespostaDto: CriarRespostaDto): Promise<Resposta>;
    updateResp(atualizarRespostaDto: AtualizarRespostaDto, _id: string): Promise<void>;
    getAllResp(): Promise<Resposta[]>;
    getOneResp(_id: string): Promise<Resposta>;
    deleteResp(_id: string): Promise<void>;
}
