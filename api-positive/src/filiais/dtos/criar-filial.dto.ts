import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarFilialDto{
    
    @IsString()
    readonly cnpj: string;

    // @IsBoolean()
    // matriz: boolean;

    @IsNotEmpty() @IsString()
    nome: string;

    @IsNotEmpty() @IsString()
    cep: string;

    @IsNotEmpty() @IsString()
    rua: string;

    @IsNotEmpty() @IsString()
    bairro: string;

    @IsNotEmpty() @IsNumber()
    numero: number;

    @IsNotEmpty() @IsString()
    cidade: string;

    @IsNotEmpty() @IsString()
    estado: string;

    @IsNotEmpty() @IsString()
    telefone: string;

    @IsEmail() @IsNotEmpty()
    email: string;
    
    @IsNotEmpty() @IsString()
    responsavel: string;

    @IsNotEmpty() @IsString()
    segmento: string;

    @IsNumber()
    numFunc: number;

    // @IsNumber()
    // fatAnual: number;
    
}