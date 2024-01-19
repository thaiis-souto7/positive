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

    async countAllForm(): Promise<number> {
        return await this.formularioModel.countDocuments();
    }

    async findForms(): Promise<Formulario[]> {
        return this.formularioModel.find({ descricao: /bem[- ]estar/i }).exec();
    }

    async findFormSite(): Promise<Formulario[]> {
        return this.formularioModel.find({ descricao: /site/i }).exec();
    }

    async createForm(criarFormularioDto: CriarFormularioDto): Promise<Formulario> {
        const formularioCriado = await new this.formularioModel(criarFormularioDto);
        return formularioCriado.save();
    }

    async updateForm(_id: string, atualizarFormularioDto: AtualizarFormularioDto): Promise<void> {

        const formularioEncontrado = await this.formularioModel.findOne({ _id }).exec();
        
        if(!formularioEncontrado) {
            throw new NotFoundException('Formulário não encontrado');
        } 
        await this.formularioModel.findOneAndUpdate({ _id }, { $set: atualizarFormularioDto }).exec();
    }

    async getAllForm(): Promise<Formulario[]> {
        return await this.formularioModel.find().exec();
    }
    
    async getFormById(_id: string): Promise<Formulario> {
        const formularioEncontrado = await this.formularioModel.findOne({ _id }).exec();
        if(!formularioEncontrado){
            throw new Error('Formulário não encontrado');
        }
        return formularioEncontrado;
    }

    async deleteForm(_id: string): Promise<any> {

        const formularioEncontrado = await this.formularioModel.findOne({ _id }).exec();
        if(!formularioEncontrado){
            throw new Error('Formulário não encontrado');
        }
        return await this.formularioModel.deleteOne({ _id }).exec();  
    }

}
