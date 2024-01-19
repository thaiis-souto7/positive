import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarRespostaDto } from './dtos/atualizar-resposta.dto';
import { CriarRespostaDto } from './dtos/criar-resposta.dto';
import { Resposta } from './interfaces/resposta.interface';
import { FormulariosService } from 'src/formularios/formularios.service';
import { PipelineStage } from 'mongoose';


@Injectable()
export class RespostaService {

private readonly logger = new Logger(RespostaService.name);
constructor(
    @InjectModel('Resposta') private readonly respostaModel: Model<Resposta>,
    private readonly formularioService: FormulariosService 
) {}

    async countAllResp(): Promise<number> {
        return await this.respostaModel.countDocuments();
    }

    async calculateAverage(): Promise<number> {
        const forms = await this.formularioService.findForms();
        const formIds = forms.map((form) => form._id);
        const responses = await this.respostaModel.find({
          formulario_id: { $in: formIds },
        });
      
        let totalSum = 0;
        let totalCount = 0;
    
        responses.forEach((response) => {
          response.itens.forEach((item) => {
            totalSum += Number(item.resposta);
            totalCount += 1;
          });
        });

        const average = totalSum / totalCount;
        return average + 1;
    }    

    async calculateAverageSite(): Promise<number> {
        const forms = await this.formularioService.findFormSite();
        const formIds = forms.map((form) => form._id);
        const responses = await this.respostaModel.find({
          formulario_id: { $in: formIds },
        });
      
        let totalSum = 0;
        let totalCount = 0;
    
        responses.forEach((response) => {
          response.itens.forEach((item) => {
            totalSum += Number(item.resposta);
            totalCount += 1;
          });
        });
    
        const average = totalSum / totalCount;
        return average + 1;
    }  

    async calculateMonthlyAverage(): Promise<any[]> {
        const forms = await this.formularioService.findForms();
        const formIds = forms.map((form) => form._id);
    
        const monthlyAverages = await this.respostaModel.aggregate([
            { $match: { formulario_id: { $in: formIds } } },
            { $unwind: "$itens" },
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    totalSum: { $sum: { $toDecimal: "$itens.resposta" } },
                    totalCount: { $sum: 1 }
                }
            },
            {
                $project: {
                    month: "$_id",
                    average: { $add: [{ $divide: ["$totalSum", "$totalCount"] }, 1] }
                }
            },
            { $sort: { month: 1 } }
        ]);
    
        return monthlyAverages;
    }
    
    async calculateMonthlyAverageSite(): Promise<any[]> {
        const forms = await this.formularioService.findFormSite();
        const formIds = forms.map((form) => form._id);
    
        const monthlyAverages = await this.respostaModel.aggregate([
            { $match: { formulario_id: { $in: formIds } } },
            { $unwind: "$itens" },
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    totalSum: { $sum: { $toDecimal: "$itens.resposta" } },
                    totalCount: { $sum: 1 }
                }
            },
            {
                $project: {
                    month: "$_id",
                    average: { $add: [{ $divide: ["$totalSum", "$totalCount"] }, 1] }
                }
            },
            { $sort: { month: 1 } }
        ]);
    
        return monthlyAverages;
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
