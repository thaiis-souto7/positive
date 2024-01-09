import { Model } from 'mongoose';
import { AtualizarLoginDto } from './dtos/atualizar-login.dto';
import { CriarLoginDto } from './dtos/criar-login.dto';
import { Login } from './interfaces/login.interface';
export declare class LoginService {
    private readonly loginModel;
    private readonly logger;
    constructor(loginModel: Model<Login>);
    createLogin(criarLoginDto: CriarLoginDto): Promise<Login>;
    updateLogin(_id: string, atualizarLoginDto: AtualizarLoginDto): Promise<void>;
    getAllLogin(): Promise<Login[]>;
    getLoginById(_id: string): Promise<Login>;
    deleteLogin(_id: string): Promise<any>;
}
