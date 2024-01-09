import { AtualizarPerguntaDto } from './dtos/atualizar-pergunta.dto';
import { CriarPerguntaDto } from './dtos/criar-pergunta.dto';
import { PerguntasService } from './perguntas.service';
import { Pergunta } from './interfaces/pergunta.interface';
export declare class PerguntasController {
    private readonly pergunta;
    constructor(pergunta: PerguntasService);
    createPerg(criarPerguntaDto: CriarPerguntaDto): Promise<Pergunta>;
    updatePerg(atualizarPerguntaDto: AtualizarPerguntaDto, _id: string): Promise<void>;
    getAllPerg(): Promise<Pergunta[]>;
    getOnePerg(_id: string): Promise<Pergunta>;
    deletePerg(_id: string): Promise<void>;
}
