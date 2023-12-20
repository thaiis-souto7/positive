import { Model } from 'mongoose';
import { AtualizarLoginDto } from './dtos/atualizar-login.dto';
import { CriarLoginDto } from './dtos/criar-login.dto';
import { Login } from './interfaces/login.interface';
export declare class LoginService {
    private readonly loginModel;
    private readonly logger;
    constructor(loginModel: Model<Login>);
    createFunc(criarLoginDto: CriarLoginDto): Promise<Login>;
    updateFunc(_id: string, atualizarLoginDto: AtualizarLoginDto): Promise<void>;
    getAllFunc(): Promise<Login[]>;
    getFuncById(_id: string): Promise<Login>;
    deleteFunc(_id: string): Promise<any>;
}
