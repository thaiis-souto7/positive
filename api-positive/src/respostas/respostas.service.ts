import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarRespostaDto } from './dtos/atualizar-resposta.dto';
import { CriarRespostaDto } from './dtos/criar-resposta.dto';
import { Resposta } from './interfaces/resposta.interface';


@Injectable()
export class RespostaService {

private readonly logger = new Logger(RespostaService.name);
constructor (@InjectModel('Resposta') private readonly respostaModel: Model<Resposta>) {}

    async countAllResp(): Promise<number> {
        return await this.respostaModel.countDocuments();
    }

    async createResp(criarRespostaDto: CriarRespostaDto): Promise<Resposta> {
        
        const respostaCriado = await new this.respostaModel(criarRespostaDto);
        return respostaCriado.save();
    }

    async updateResp(_id: string, atualizarRespostaDto: AtualizarRespostaDto): Promise<void> {

        const respostaEncontrado = await this.respostaModel.findOne({ _id }).exec();
        
        if(!respostaEncontrado) {
            throw new NotFoundException('Formulário não encontrado');
        } 
        await this.respostaModel.findOneAndUpdate({ _id }, { $set: atualizarRespostaDto }).exec();
    }

    async getAllResp(): Promise<Resposta[]> {
        return await this.respostaModel.find().exec();
    }
    
    async getRespById(_id: string): Promise<Resposta> {
        const respostaEncontrado = await this.respostaModel.findOne({ _id }).exec();
        if(!respostaEncontrado){
            throw new Error('Formulário não encontrado');
        }
        return respostaEncontrado;
    }

    async deleteResp(_id: string): Promise<any> {

        const respostaEncontrado = await this.respostaModel.findOne({ _id }).exec();
        if(!respostaEncontrado){
            throw new Error('Formulário não encontrado');
        }
        return await this.respostaModel.deleteOne({ _id }).exec();  
    }

}
