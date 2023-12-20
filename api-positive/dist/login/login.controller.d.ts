import { AtualizarLoginDto } from './dtos/atualizar-login.dto';
import { CriarLoginDto } from './dtos/criar-login.dto';
import { LoginService } from './login.service';
import { Login } from './interfaces/login.interface';
export declare class LoginController {
    private readonly login;
    constructor(login: LoginService);
    createFunc(criarLoginDto: CriarLoginDto): Promise<Login>;
    updateFunc(atualizarLoginDto: AtualizarLoginDto, _id: string): Promise<void>;
    getAllFunc(): Promise<Login[]>;
    getOneFunc(_id: string): Promise<Login>;
    deleteFunc(_id: string): Promise<void>;
}
