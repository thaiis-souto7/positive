import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarFormularioDto } from './dtos/atualizar-formulario.dto';
import { CriarFormularioDto } from './dtos/criar-formulario.dto';
import { FormulariosService } from './formularios.service';
import { Formulario } from './interfaces/formulario.interface';
import { FormularioValidationParamsPipe } from './pipes/formulario.validation.params.pipe';

@Controller('api/formularios')

export class FormulariosController {

    constructor(private readonly formulario : FormulariosService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createFunc(@Body() criarFormularioDto: CriarFormularioDto): Promise<Formulario>{
        return await this.formulario.createFunc(criarFormularioDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateFunc( 
        @Body() atualizarFormularioDto: AtualizarFormularioDto, 
        @Param('_id', FormularioValidationParamsPipe) _id: string): Promise<void> {
        
        await this.formulario.updateFunc(_id, atualizarFormularioDto);
    }

    @Get()          
    async getAllFunc(): Promise<Formulario[]> {
        return await this.formulario.getAllFunc();
    }

    @Get('/:_id')          
    async getOneFunc(@Param('_id', FormularioValidationParamsPipe) _id: string): Promise<Formulario> {
        return await this.formulario.getFuncById(_id);
    }

    @Delete('/:_id')
    async deleteFunc(@Param('_id', FormularioValidationParamsPipe) _id: string): Promise<void> {
        await this.formulario.deleteFunc(_id);
    }

}
