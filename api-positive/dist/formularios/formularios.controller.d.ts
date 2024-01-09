import { AtualizarFormularioDto } from './dtos/atualizar-formulario.dto';
import { CriarFormularioDto } from './dtos/criar-formulario.dto';
import { FormulariosService } from './formularios.service';
import { Formulario } from './interfaces/formulario.interface';
export declare class FormulariosController {
    private readonly formulario;
    constructor(formulario: FormulariosService);
    getCountForm(): Promise<number>;
    createForm(criarFormularioDto: CriarFormularioDto): Promise<Formulario>;
    updateForm(atualizarFormularioDto: AtualizarFormularioDto, _id: string): Promise<void>;
    getAllForm(): Promise<Formulario[]>;
    getOneForm(_id: string): Promise<Formulario>;
    deleteForm(_id: string): Promise<void>;
}
