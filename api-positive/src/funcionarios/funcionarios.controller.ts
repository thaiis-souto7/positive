import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarFuncionarioDto } from './dtos/atualizar-funcionario.dto';
import { CriarFuncionarioDto } from './dtos/criar-funcionario.dto';
import { FuncionariosService } from './funcionarios.service';
import { Funcionario } from './interfaces/funcionario.interface';
import { FuncionarioValidationParamsPipe } from './pipes/funcionario.validation.params.pipe';

@Controller('/api/funcionarios')

export class FuncionariosController {

    constructor(private readonly funcionario : FuncionariosService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createFunc(@Body() criarFuncionarioDto: CriarFuncionarioDto): Promise<Funcionario>{
        return await this.funcionario.createFunc(criarFuncionarioDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateFunc( 
        @Body() atualizarFuncionarioDto: AtualizarFuncionarioDto, 
        @Param('_id', FuncionarioValidationParamsPipe) _id: string): Promise<void> {
        
        await this.funcionario.updateFunc(_id, atualizarFuncionarioDto);
    }

    @Get()          
    async getAllFunc(): Promise<Funcionario[]> {
        return await this.funcionario.getAllFunc();
    }

    @Get('/:_id')          
    async getOneFunc(@Param('_id', FuncionarioValidationParamsPipe) _id: string): Promise<Funcionario> {
        return await this.funcionario.getFuncById(_id);
    }

    @Delete('/:_id')
    async deleteFunc(@Param('_id', FuncionarioValidationParamsPipe) _id: string): Promise<void> {
        await this.funcionario.deleteFunc(_id);
    }

}
