import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarLoginDto } from './dtos/atualizar-login.dto';
import { CriarLoginDto } from './dtos/criar-login.dto';
import { Login } from './interfaces/login.interface';


@Injectable()
export class LoginService {

private readonly logger = new Logger(LoginService.name);
constructor (@InjectModel('Login') private readonly loginModel: Model<Login>) {}


    async createLogin(criarLoginDto: CriarLoginDto): Promise<Login> {
    
        const loginCriado = await new this.loginModel(criarLoginDto);
        return loginCriado.save();
    }

    async updateLogin(_id: string, atualizarLoginDto: AtualizarLoginDto): Promise<void> {

        const loginEncontrado = await this.loginModel.findOne({ _id }).exec();
        
        if(!loginEncontrado) {
            throw new NotFoundException('Login não encontrada');
        } 
        await this.loginModel.findOneAndUpdate({ _id }, { $set: atualizarLoginDto }).exec();
    }

    async getAllLogin(): Promise<Login[]> {
        return await this.loginModel.find().exec();
    }
    
    async getLoginById(_id: string): Promise<Login> {
        const loginEncontrado = await this.loginModel.findOne({ _id }).exec();
        if(!loginEncontrado){
            throw new Error('Login não encontrada');
        }
        return loginEncontrado;
    }

    async deleteLogin(_id: string): Promise<any> {

        const loginEncontrado = await this.loginModel.findOne({ _id }).exec();
        if(!loginEncontrado){
            throw new Error('Login não encontrada');
        }
        return await this.loginModel.deleteOne({ _id }).exec();  
    }

}
