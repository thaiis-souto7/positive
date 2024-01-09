import { AtualizarRespostaDto } from './dtos/atualizar-resposta.dto';
import { CriarRespostaDto } from './dtos/criar-resposta.dto';
import { RespostaService } from './respostas.service';
import { Resposta } from './interfaces/resposta.interface';
export declare class RespostasController {
    private readonly resposta;
    constructor(resposta: RespostaService);
    createFunc(criarRespostaDto: CriarRespostaDto): Promise<Resposta>;
    updateFunc(atualizarRespostaDto: AtualizarRespostaDto, _id: string): Promise<void>;
    getAllFunc(): Promise<Resposta[]>;
    getOneFunc(_id: string): Promise<Resposta>;
    deleteFunc(_id: string): Promise<void>;
}
