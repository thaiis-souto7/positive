import { Model } from 'mongoose';
import { AtualizarFormularioDto } from './dtos/atualizar-formulario.dto';
import { CriarFormularioDto } from './dtos/criar-formulario.dto';
import { Formulario } from './interfaces/formulario.interface';
export declare class FormulariosService {
    private readonly formularioModel;
    private readonly logger;
    constructor(formularioModel: Model<Formulario>);
    createFunc(criarFormularioDto: CriarFormularioDto): Promise<Formulario>;
    updateFunc(_id: string, atualizarFormularioDto: AtualizarFormularioDto): Promise<void>;
    getAllFunc(): Promise<Formulario[]>;
    getFuncById(_id: string): Promise<Formulario>;
    deleteFunc(_id: string): Promise<any>;
}
