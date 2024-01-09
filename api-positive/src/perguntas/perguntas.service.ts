import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarPerguntaDto } from './dtos/atualizar-pergunta.dto';
import { CriarPerguntaDto } from './dtos/criar-pergunta.dto';
import { Pergunta } from './interfaces/pergunta.interface';


@Injectable()
export class PerguntasService {

private readonly logger = new Logger(PerguntasService.name);
constructor (@InjectModel('Pergunta') private readonly perguntaModel: Model<Pergunta>) {}


    async createPerg(criarPerguntaDto: CriarPerguntaDto): Promise<Pergunta> {
        const { pergunta } = criarPerguntaDto;
        const perguntaEncontrado = await this.perguntaModel.findOne({ pergunta }).exec();
        
        if(perguntaEncontrado) {
            throw new BadRequestException('Pergunta já cadastrada');
        }
        const perguntaCriado = await new this.perguntaModel(criarPerguntaDto);
        return perguntaCriado.save();
    }

    async updatePerg(_id: string, atualizarPerguntaDto: AtualizarPerguntaDto): Promise<void> {

        const perguntaEncontrado = await this.perguntaModel.findOne({ _id }).exec();
        
        if(!perguntaEncontrado) {
            throw new NotFoundException('Pergunta não encontrada');
        } 
        await this.perguntaModel.findOneAndUpdate({ _id }, { $set: atualizarPerguntaDto }).exec();
    }

    async getAllPerg(): Promise<Pergunta[]> {
        return await this.perguntaModel.find().exec();
    }
    
    async getPergById(_id: string): Promise<Pergunta> {
        const perguntaEncontrado = await this.perguntaModel.findOne({ _id }).exec();
        if(!perguntaEncontrado){
            throw new Error('Pergunta não encontrada');
        }
        return perguntaEncontrado;
    }

    async deletePerg(_id: string): Promise<any> {

        const perguntaEncontrado = await this.perguntaModel.findOne({ _id }).exec();
        if(!perguntaEncontrado){
            throw new Error('Pergunta não encontrada');
        }
        return await this.perguntaModel.deleteOne({ _id }).exec();  
    }

}
