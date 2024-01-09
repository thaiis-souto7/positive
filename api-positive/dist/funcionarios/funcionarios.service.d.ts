import { Model } from 'mongoose';
import { AtualizarFuncionarioDto } from './dtos/atualizar-funcionario.dto';
import { CriarFuncionarioDto } from './dtos/criar-funcionario.dto';
import { Funcionario } from './interfaces/funcionario.interface';
export declare class FuncionariosService {
    private readonly funcionarioModel;
    private readonly logger;
    constructor(funcionarioModel: Model<Funcionario>);
    countAllFunc(): Promise<number>;
    createFunc(criarFuncionarioDto: CriarFuncionarioDto): Promise<Funcionario>;
    updateFunc(_id: string, atualizarFuncionarioDto: AtualizarFuncionarioDto): Promise<void>;
    getAllFunc(): Promise<Funcionario[]>;
    getFuncById(_id: string): Promise<Funcionario>;
    deleteFunc(_id: string): Promise<any>;
}
