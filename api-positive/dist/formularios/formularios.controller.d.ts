import { AtualizarFormularioDto } from './dtos/atualizar-formulario.dto';
import { CriarFormularioDto } from './dtos/criar-formulario.dto';
import { FormulariosService } from './formularios.service';
import { Formulario } from './interfaces/formulario.interface';
export declare class FormulariosController {
    private readonly formulario;
    constructor(formulario: FormulariosService);
    createFunc(criarFormularioDto: CriarFormularioDto): Promise<Formulario>;
    updateFunc(atualizarFormularioDto: AtualizarFormularioDto, _id: string): Promise<void>;
    getAllFunc(): Promise<Formulario[]>;
    getOneFunc(_id: string): Promise<Formulario>;
    deleteFunc(_id: string): Promise<void>;
}
