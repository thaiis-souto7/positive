import { AtualizarLoginDto } from './dtos/atualizar-login.dto';
import { CriarLoginDto } from './dtos/criar-login.dto';
import { LoginService } from './login.service';
import { Login } from './interfaces/login.interface';
export declare class LoginController {
    private readonly login;
    constructor(login: LoginService);
    createLogin(criarLoginDto: CriarLoginDto): Promise<Login>;
    updateLogin(atualizarLoginDto: AtualizarLoginDto, _id: string): Promise<void>;
    getAllLogin(): Promise<Login[]>;
    getOneLogin(_id: string): Promise<Login>;
    deleteLogin(_id: string): Promise<void>;
}
