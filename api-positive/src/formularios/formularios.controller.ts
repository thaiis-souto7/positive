import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarFormularioDto } from './dtos/atualizar-formulario.dto';
import { CriarFormularioDto } from './dtos/criar-formulario.dto';
import { FormulariosService } from './formularios.service';
import { Formulario } from './interfaces/formulario.interface';
import { FormularioValidationParamsPipe } from './pipes/formulario.validation.params.pipe';

@Controller('api/formularios')

export class FormulariosController {

    constructor(private readonly formulario : FormulariosService) {}

    @Get('/count')
    async getCountForm(): Promise<number> {
        return await this.formulario.countAllForm();
    }

    @Get('/find')
    async getForms(): Promise<Formulario[]> {
        return await this.formulario.findForms();
    }

    @Get('/findSite')
    async getFormSite(): Promise<Formulario[]> {
        return await this.formulario.findFormSite();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createForm(@Body() criarFormularioDto: CriarFormularioDto): Promise<Formulario>{
        return await this.formulario.createForm(criarFormularioDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateForm( 
        @Body() atualizarFormularioDto: AtualizarFormularioDto, 
        @Param('_id', FormularioValidationParamsPipe) _id: string): Promise<void> {
        
        await this.formulario.updateForm(_id, atualizarFormularioDto);
    }

    @Get()          
    async getAllForm(): Promise<Formulario[]> {
        return await this.formulario.getAllForm();
    }

    @Get('/:_id')          
    async getOneForm(@Param('_id', FormularioValidationParamsPipe) _id: string): Promise<Formulario> {
        return await this.formulario.getFormById(_id);
    }

    @Delete('/:_id')
    async deleteForm(@Param('_id', FormularioValidationParamsPipe) _id: string): Promise<void> {
        await this.formulario.deleteForm(_id);
    }

}
