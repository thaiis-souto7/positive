import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarRespostaDto } from './dtos/atualizar-resposta.dto';
import { CriarRespostaDto } from './dtos/criar-resposta.dto';
import { RespostaService } from './respostas.service';
import { Resposta } from './interfaces/resposta.interface';
import { RespostaValidationParamsPipe } from './pipes/resposta.validation.params.pipe';

@Controller('api/respostas')

export class RespostasController {

    constructor(private readonly resposta : RespostaService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createFunc(@Body() criarRespostaDto: CriarRespostaDto): Promise<Resposta>{
        return await this.resposta.createFunc(criarRespostaDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateFunc( 
        @Body() atualizarRespostaDto: AtualizarRespostaDto, 
        @Param('_id', RespostaValidationParamsPipe) _id: string): Promise<void> {
        
        await this.resposta.updateFunc(_id, atualizarRespostaDto);
    }

    @Get()          
    async getAllFunc(): Promise<Resposta[]> {
        return await this.resposta.getAllFunc();
    }

    @Get('/:_id')          
    async getOneFunc(@Param('_id', RespostaValidationParamsPipe) _id: string): Promise<Resposta> {
        return await this.resposta.getFuncById(_id);
    }

    @Delete('/:_id')
    async deleteFunc(@Param('_id', RespostaValidationParamsPipe) _id: string): Promise<void> {
        await this.resposta.deleteFunc(_id);
    }

}
