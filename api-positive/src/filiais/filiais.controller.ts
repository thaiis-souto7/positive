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
    async createFunc(@Body() criarFilialDto: CriarFilialDto): Promise<Filial>{
        return await this.filial.createFunc(criarFilialDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateFunc( 
        @Body() atualizarFilialDto: AtualizarFilialDto, 
        @Param('_id', FilialValidationParamsPipe) _id: string): Promise<void> {
        
        await this.filial.updateFunc(_id, atualizarFilialDto);
    }

    @Get()          
    async getAllFunc(): Promise<Filial[]> {
        return await this.filial.getAllFunc();
    }

    @Get('/:_id')          
    async getOneFunc(@Param('_id', FilialValidationParamsPipe) _id: string): Promise<Filial> {
        return await this.filial.getFuncById(_id);
    }

    @Delete('/:_id')
    async deleteFunc(@Param('_id', FilialValidationParamsPipe) _id: string): Promise<void> {
        await this.filial.deleteFunc(_id);
    }

}