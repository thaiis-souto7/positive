import { AtualizarPerguntaDto } from './dtos/atualizar-pergunta.dto';
import { CriarPerguntaDto } from './dtos/criar-pergunta.dto';
import { PerguntasService } from './perguntas.service';
import { Pergunta } from './interfaces/pergunta.interface';
export declare class PerguntasController {
    private readonly pergunta;
    constructor(pergunta: PerguntasService);
    createFunc(criarPerguntaDto: CriarPerguntaDto): Promise<Pergunta>;
    updateFunc(atualizarPerguntaDto: AtualizarPerguntaDto, _id: string): Promise<void>;
    getAllFunc(): Promise<Pergunta[]>;
    getOneFunc(_id: string): Promise<Pergunta>;
    deleteFunc(_id: string): Promise<void>;
}
