import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AtualizarFilialDto{

    // @IsBoolean()
    // matriz: boolean;

    @IsString()
    nome: string;

    @IsString()
    cep: string;

    @IsString()
    rua: string;

    @IsString()
    bairro: string;

    @IsNumber()
    numero: number;

    @IsString()
    cidade: string;

    @IsString()
    estado: string;

    @IsString()
    telefone: string;

    @IsEmail()
    email: string;
    
    @IsString()
    responsavel: string;

    @IsNumber()
    numFunc: number;

    // @IsNumber()
    // fatAnual: number;
}