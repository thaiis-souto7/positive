import { IsDateString, IsEmail, IsNumber, IsString } from "class-validator";

export class AtualizarFuncionarioDto{
    
    @IsString()
    nome: string;

    @IsEmail()  
    email: string;
    
    @IsString()
    cargo: string;

    @IsNumber()
    cargaHoraria: number;

    @IsNumber()
    idade: number;

    @IsNumber()
    nivelAcesso: number;

}