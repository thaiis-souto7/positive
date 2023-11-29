import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarFuncionarioDto } from './dtos/atualizar-funcionario.dto';
import { CriarFuncionarioDto } from './dtos/criar-funcionario.dto';
import { Funcionario } from './interfaces/funcionario.interface';


@Injectable()
export class FuncionariosService {

private readonly logger = new Logger(FuncionariosService.name);
constructor (@InjectModel('Funcionario') private readonly funcionarioModel: Model<Funcionario>) {}


    async createFunc(criarFuncionarioDto: CriarFuncionarioDto): Promise<Funcionario> {
        const { email } = criarFuncionarioDto;
        const funcionarioEncontrado = await this.funcionarioModel.findOne({ email }).exec();
        
        if(funcionarioEncontrado) {
            throw new BadRequestException('Funcionário já cadastrado');
        }
        const funcionarioCriado = await new this.funcionarioModel(criarFuncionarioDto);
        return funcionarioCriado.save();
    }

    async updateFunc(_id: string, atualizarFuncionarioDto: AtualizarFuncionarioDto): Promise<void> {

        const funcionarioEncontrado = await this.funcionarioModel.findOne({ _id }).exec();
        
        if(!funcionarioEncontrado) {
            throw new NotFoundException('Funcionário não encontrado');
        } 
        await this.funcionarioModel.findOneAndUpdate({ _id }, { $set: atualizarFuncionarioDto }).exec();
    }

    async getAllFunc(): Promise<Funcionario[]> {
        return await this.funcionarioModel.find().exec();
    }
    
    async getFuncById(_id: string): Promise<Funcionario> {
        const funcionarioEncontrado = await this.funcionarioModel.findOne({ _id }).exec();
        if(!funcionarioEncontrado){
            throw new Error('Funcionário não encontrado');
        }
        return funcionarioEncontrado;
    }

    async deleteFunc(_id: string): Promise<any> {

        const funcionarioEncontrado = await this.funcionarioModel.findOne({ _id }).exec();
        if(!funcionarioEncontrado){
            throw new Error('Funcionário não encontrado');
        }
        return await this.funcionarioModel.deleteOne({ _id }).exec();  
    }

}
