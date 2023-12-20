import { Controller, Post, Body, Get, Delete, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
import { AtualizarLoginDto } from './dtos/atualizar-login.dto';
import { CriarLoginDto } from './dtos/criar-login.dto';
import { LoginService } from './login.service';
import { Login } from './interfaces/login.interface';
import { LoginValidationParamsPipe } from './pipes/login.validation.params.pipe';

@Controller('api/login')
//teste
export class LoginController {

    constructor(private readonly login : LoginService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createFunc(@Body() criarLoginDto: CriarLoginDto): Promise<Login>{
        return await this.login.createFunc(criarLoginDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateFunc( 
        @Body() atualizarLoginDto: AtualizarLoginDto, 
        @Param('_id', LoginValidationParamsPipe) _id: string): Promise<void> {
        
        await this.login.updateFunc(_id, atualizarLoginDto);
    }

    @Get()          
    async getAllFunc(): Promise<Login[]> {
        return await this.login.getAllFunc();
    }

    @Get('/:_id')          
    async getOneFunc(@Param('_id', LoginValidationParamsPipe) _id: string): Promise<Login> {
        return await this.login.getFuncById(_id);
    }

    @Delete('/:_id')
    async deleteFunc(@Param('_id', LoginValidationParamsPipe) _id: string): Promise<void> {
        await this.login.deleteFunc(_id);
    }

}
