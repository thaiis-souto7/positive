import { Model } from 'mongoose';
import { AtualizarFormularioDto } from './dtos/atualizar-formulario.dto';
import { CriarFormularioDto } from './dtos/criar-formulario.dto';
import { Formulario } from './interfaces/formulario.interface';
export declare class FormulariosService {
    private readonly formularioModel;
    private readonly logger;
    constructor(formularioModel: Model<Formulario>);
    countAllForm(): Promise<number>;
    findForms(): Promise<Formulario[]>;
    findFormSite(): Promise<Formulario[]>;
    createForm(criarFormularioDto: CriarFormularioDto): Promise<Formulario>;
    updateForm(_id: string, atualizarFormularioDto: AtualizarFormularioDto): Promise<void>;
    getAllForm(): Promise<Formulario[]>;
    getFormById(_id: string): Promise<Formulario>;
    deleteForm(_id: string): Promise<any>;
}
