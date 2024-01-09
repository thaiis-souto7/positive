import { Model } from 'mongoose';
import { AtualizarPerguntaDto } from './dtos/atualizar-pergunta.dto';
import { CriarPerguntaDto } from './dtos/criar-pergunta.dto';
import { Pergunta } from './interfaces/pergunta.interface';
export declare class PerguntasService {
    private readonly perguntaModel;
    private readonly logger;
    constructor(perguntaModel: Model<Pergunta>);
    createPerg(criarPerguntaDto: CriarPerguntaDto): Promise<Pergunta>;
    updatePerg(_id: string, atualizarPerguntaDto: AtualizarPerguntaDto): Promise<void>;
    getAllPerg(): Promise<Pergunta[]>;
    getPergById(_id: string): Promise<Pergunta>;
    deletePerg(_id: string): Promise<any>;
}
