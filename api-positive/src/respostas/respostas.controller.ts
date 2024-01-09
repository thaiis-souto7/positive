import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarRespostaDto } from './dtos/atualizar-resposta.dto';
import { CriarRespostaDto } from './dtos/criar-resposta.dto';
import { RespostaService } from './respostas.service';
import { Resposta } from './interfaces/resposta.interface';
import { RespostaValidationParamsPipe } from './pipes/resposta.validation.params.pipe';

@Controller('api/respostas')

export class RespostasController {

    constructor(private readonly resposta : RespostaService) {}

    @Get('/count')
    async getCountResp(): Promise<number> {
        return await this.resposta.countAllResp();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createResp(@Body() criarRespostaDto: CriarRespostaDto): Promise<Resposta>{
        return await this.resposta.createResp(criarRespostaDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateResp( 
        @Body() atualizarRespostaDto: AtualizarRespostaDto, 
        @Param('_id', RespostaValidationParamsPipe) _id: string): Promise<void> {
        
        await this.resposta.updateResp(_id, atualizarRespostaDto);
    }

    @Get()          
    async getAllResp(): Promise<Resposta[]> {
        return await this.resposta.getAllResp();
    }

    @Get('/:_id')          
    async getOneResp(@Param('_id', RespostaValidationParamsPipe) _id: string): Promise<Resposta> {
        return await this.resposta.getRespById(_id);
    }

    @Delete('/:_id')
    async deleteResp(@Param('_id', RespostaValidationParamsPipe) _id: string): Promise<void> {
        await this.resposta.deleteResp(_id);
    }

}
