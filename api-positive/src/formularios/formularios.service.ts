import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarFormularioDto } from './dtos/atualizar-formulario.dto';
import { CriarFormularioDto } from './dtos/criar-formulario.dto';
import { Formulario } from './interfaces/formulario.interface';


@Injectable()
export class FormulariosService {

private readonly logger = new Logger(FormulariosService.name);
constructor (@InjectModel('Formulario') private readonly formularioModel: Model<Formulario>) {}

    async createFunc(criarFormularioDto: CriarFormularioDto): Promise<Formulario> {
        
        const formularioCriado = await new this.formularioModel(criarFormularioDto);
        return formularioCriado.save();
    }

    async updateFunc(_id: string, atualizarFormularioDto: AtualizarFormularioDto): Promise<void> {

        const formularioEncontrado = await this.formularioModel.findOne({ _id }).exec();
        
        if(!formularioEncontrado) {
            throw new NotFoundException('Formulário não encontrado');
        } 
        await this.formularioModel.findOneAndUpdate({ _id }, { $set: atualizarFormularioDto }).exec();
    }

    async getAllFunc(): Promise<Formulario[]> {
        return await this.formularioModel.find().exec();
    }
    
    async getFuncById(_id: string): Promise<Formulario> {
        const formularioEncontrado = await this.formularioModel.findOne({ _id }).exec();
        if(!formularioEncontrado){
            throw new Error('Formulário não encontrado');
        }
        return formularioEncontrado;
    }

    async deleteFunc(_id: string): Promise<any> {

        const formularioEncontrado = await this.formularioModel.findOne({ _id }).exec();
        if(!formularioEncontrado){
            throw new Error('Formulário não encontrado');
        }
        return await this.formularioModel.deleteOne({ _id }).exec();  
    }

}
