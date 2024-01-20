import { AtualizarFilialDto } from './dtos/atualizar-filial.dto';
import { CriarFilialDto } from './dtos/criar-filial.dto';
import { FiliaisService } from './filiais.service';
import { Filial } from './interfaces/filial.interface';
export declare class FiliaisController {
    private readonly filial;
    constructor(filial: FiliaisService);
    createFilial(criarFilialDto: CriarFilialDto): Promise<Filial>;
    updateFilial(atualizarFilialDto: AtualizarFilialDto, _id: string): Promise<void>;
    getAllFilial(): Promise<Filial[]>;
    getOneFilial(_id: string): Promise<Filial>;
    deleteFilial(_id: string): Promise<void>;
}
