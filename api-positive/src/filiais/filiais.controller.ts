import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarFilialDto } from './dtos/atualizar-filial.dto';
import { CriarFilialDto } from './dtos/criar-filial.dto';
import { FiliaisService } from './filiais.service';
import { Filial } from './interfaces/filial.interface';
import { FilialValidationParamsPipe } from './pipes/filial.validation.params.pipe';

@Controller('api/filiais')

export class FiliaisController {

    constructor(private readonly filial : FiliaisService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createFilial(@Body() criarFilialDto: CriarFilialDto): Promise<Filial>{
        return await this.filial.createFilial(criarFilialDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateFilial( 
        @Body() atualizarFilialDto: AtualizarFilialDto, 
        @Param('_id', FilialValidationParamsPipe) _id: string): Promise<void> {
        
        await this.filial.updateFilial(_id, atualizarFilialDto);
    }

    @Get()          
    async getAllFilial(): Promise<Filial[]> {
        return await this.filial.getAllFilial();
    }

    @Get('/:_id')          
    async getOneFilial(@Param('_id', FilialValidationParamsPipe) _id: string): Promise<Filial> {
        return await this.filial.getFilialById(_id);
    }

    @Delete('/:_id')
    async deleteFilial(@Param('_id', FilialValidationParamsPipe) _id: string): Promise<void> {
        await this.filial.deleteFilial(_id);
    }

}