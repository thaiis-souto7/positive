import { Model } from 'mongoose';
import { AtualizarRespostaDto } from './dtos/atualizar-resposta.dto';
import { CriarRespostaDto } from './dtos/criar-resposta.dto';
import { Resposta } from './interfaces/resposta.interface';
import { FormulariosService } from 'src/formularios/formularios.service';
export declare class RespostaService {
    private readonly respostaModel;
    private readonly formularioService;
    private readonly logger;
    constructor(respostaModel: Model<Resposta>, formularioService: FormulariosService);
    countAllResp(): Promise<number>;
    calculateAverage(): Promise<number>;
    calculateAverageSite(): Promise<number>;
    calculateMonthlyAverage(): Promise<any[]>;
    calculateMonthlyAverageSite(): Promise<any[]>;
    createResp(criarRespostaDto: CriarRespostaDto): Promise<Resposta>;
    updateResp(_id: string, atualizarRespostaDto: AtualizarRespostaDto): Promise<void>;
    getAllResp(): Promise<Resposta[]>;
    getRespById(_id: string): Promise<Resposta>;
    deleteResp(_id: string): Promise<any>;
}
