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
    async createLogin(@Body() criarLoginDto: CriarLoginDto): Promise<Login>{
        return await this.login.createLogin(criarLoginDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async updateLogin( 
        @Body() atualizarLoginDto: AtualizarLoginDto, 
        @Param('_id', LoginValidationParamsPipe) _id: string): Promise<void> {
        
        await this.login.updateLogin(_id, atualizarLoginDto);
    }

    @Get()          
    async getAllLogin(): Promise<Login[]> {
        return await this.login.getAllLogin();
    }

    @Get('/:_id')          
    async getOneLogin(@Param('_id', LoginValidationParamsPipe) _id: string): Promise<Login> {
        return await this.login.getLoginById(_id);
    }

    @Delete('/:_id')
    async deleteLogin(@Param('_id', LoginValidationParamsPipe) _id: string): Promise<void> {
        await this.login.deleteLogin(_id);
    }

}
