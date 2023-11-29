import { Model } from 'mongoose';
import { AtualizarPerguntaDto } from './dtos/atualizar-pergunta.dto';
import { CriarPerguntaDto } from './dtos/criar-pergunta.dto';
import { Pergunta } from './interfaces/pergunta.interface';
export declare class PerguntasService {
    private readonly perguntaModel;
    private readonly logger;
    constructor(perguntaModel: Model<Pergunta>);
    createFunc(criarPerguntaDto: CriarPerguntaDto): Promise<Pergunta>;
    updateFunc(_id: string, atualizarPerguntaDto: AtualizarPerguntaDto): Promise<void>;
    getAllFunc(): Promise<Pergunta[]>;
    getFuncById(_id: string): Promise<Pergunta>;
    deleteFunc(_id: string): Promise<any>;
}
