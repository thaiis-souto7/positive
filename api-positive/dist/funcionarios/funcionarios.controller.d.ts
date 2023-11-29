import { AtualizarFuncionarioDto } from './dtos/atualizar-funcionario.dto';
import { CriarFuncionarioDto } from './dtos/criar-funcionario.dto';
import { FuncionariosService } from './funcionarios.service';
import { Funcionario } from './interfaces/funcionario.interface';
export declare class FuncionariosController {
    private readonly funcionario;
    constructor(funcionario: FuncionariosService);
    createFunc(criarFuncionarioDto: CriarFuncionarioDto): Promise<Funcionario>;
    updateFunc(atualizarFuncionarioDto: AtualizarFuncionarioDto, _id: string): Promise<void>;
    getAllFunc(): Promise<Funcionario[]>;
    getOneFunc(_id: string): Promise<Funcionario>;
    deleteFunc(_id: string): Promise<void>;
}
