import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarFilialDto } from './dtos/atualizar-filial.dto';
import { CriarFilialDto } from './dtos/criar-filial.dto';
import { Filial } from './interfaces/filial.interface';


@Injectable()
export class FiliaisService {

private readonly logger = new Logger(FiliaisService.name);
constructor (@InjectModel('Filial') private readonly filialModel: Model<Filial>) {}


    async createFunc(criarFilialDto: CriarFilialDto): Promise<Filial> {
        const { email } = criarFilialDto;
        const filialEncontrado = await this.filialModel.findOne({ email }).exec();
        
        if(filialEncontrado) {
            throw new BadRequestException('Filial já cadastrada');
        }
        const filialCriado = await new this.filialModel(criarFilialDto);
        return filialCriado.save();
    }

    async updateFunc(_id: string, atualizarFilialDto: AtualizarFilialDto): Promise<void> {

        const filialEncontrado = await this.filialModel.findOne({ _id }).exec();
        
        if(!filialEncontrado) {
            throw new NotFoundException('Filial não encontrada');
        } 
        await this.filialModel.findOneAndUpdate({ _id }, { $set: atualizarFilialDto }).exec();
    }

    async getAllFunc(): Promise<Filial[]> {
        return await this.filialModel.find().exec();
    }
    
    async getFuncById(_id: string): Promise<Filial> {
        const filialEncontrado = await this.filialModel.findOne({ _id }).exec();
        if(!filialEncontrado){
            throw new Error('Filial não encontrada');
        }
        return filialEncontrado;
    }

    async deleteFunc(_id: string): Promise<any> {

        const filialEncontrado = await this.filialModel.findOne({ _id }).exec();
        if(!filialEncontrado){
            throw new Error('Filial não encontrada');
        }
        return await this.filialModel.deleteOne({ _id }).exec();  
    }

}
