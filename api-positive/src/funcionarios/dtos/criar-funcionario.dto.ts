import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarFuncionarioDto{
    
    @IsNotEmpty() @IsString()
    readonly matricula: string;

    @IsNotEmpty() @IsString()
    nome: string;

    @IsEmail() @IsNotEmpty()
    email: string;
    
    @IsNotEmpty() @IsString()
    cargo: string;

    @IsNotEmpty() @IsNumber()
    cargaHoraria: number;

    @IsNotEmpty() @IsNumber()
    nivelAcesso: number;
    
}