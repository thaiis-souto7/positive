import { AtualizarFilialDto } from './dtos/atualizar-filial.dto';
import { CriarFilialDto } from './dtos/criar-filial.dto';
import { FiliaisService } from './filiais.service';
import { Filial } from './interfaces/filial.interface';
export declare class FiliaisController {
    private readonly filial;
    constructor(filial: FiliaisService);
    createFunc(criarFilialDto: CriarFilialDto): Promise<Filial>;
    updateFunc(atualizarFilialDto: AtualizarFilialDto, _id: string): Promise<void>;
    getAllFunc(): Promise<Filial[]>;
    getOneFunc(_id: string): Promise<Filial>;
    deleteFunc(_id: string): Promise<void>;
}
