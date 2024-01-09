import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarPerguntaDto } from './dtos/atualizar-pergunta.dto';
import { CriarPerguntaDto } from './dtos/criar-pergunta.dto';
import { PerguntasService } from './perguntas.service';
import { Pergunta } from './interfaces/pergunta.interface';
import { PerguntaValidationParamsPipe } from './pipes/pergunta.validation.params.pipe';

@Controller('api/perguntas')
//teste
export class PerguntasController {

    constructor(private readonly pergunta : PerguntasService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createPerg(@Body() criarPerguntaDto: CriarPerguntaDto): Promise<Pergunta>{
        return await this.pergunta.createPerg(criarPerguntaDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updatePerg( 
        @Body() atualizarPerguntaDto: AtualizarPerguntaDto, 
        @Param('_id', PerguntaValidationParamsPipe) _id: string): Promise<void> {
        
        await this.pergunta.updatePerg(_id, atualizarPerguntaDto);
    }

    @Get()          
    async getAllPerg(): Promise<Pergunta[]> {
        return await this.pergunta.getAllPerg();
    }

    @Get('/:_id')          
    async getOnePerg(@Param('_id', PerguntaValidationParamsPipe) _id: string): Promise<Pergunta> {
        return await this.pergunta.getPergById(_id);
    }

    @Delete('/:_id')
    async deletePerg(@Param('_id', PerguntaValidationParamsPipe) _id: string): Promise<void> {
        await this.pergunta.deletePerg(_id);
    }

}
