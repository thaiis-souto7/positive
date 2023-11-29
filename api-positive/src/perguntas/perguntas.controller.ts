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
    async createFunc(@Body() criarPerguntaDto: CriarPerguntaDto): Promise<Pergunta>{
        return await this.pergunta.createFunc(criarPerguntaDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateFunc( 
        @Body() atualizarPerguntaDto: AtualizarPerguntaDto, 
        @Param('_id', PerguntaValidationParamsPipe) _id: string): Promise<void> {
        
        await this.pergunta.updateFunc(_id, atualizarPerguntaDto);
    }

    @Get()          
    async getAllFunc(): Promise<Pergunta[]> {
        return await this.pergunta.getAllFunc();
    }

    @Get('/:_id')          
    async getOneFunc(@Param('_id', PerguntaValidationParamsPipe) _id: string): Promise<Pergunta> {
        return await this.pergunta.getFuncById(_id);
    }

    @Delete('/:_id')
    async deleteFunc(@Param('_id', PerguntaValidationParamsPipe) _id: string): Promise<void> {
        await this.pergunta.deleteFunc(_id);
    }

}
