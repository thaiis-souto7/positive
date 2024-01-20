import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarPerguntaDto{
    
    @IsNotEmpty() @IsString()
    readonly pergunta: string;

    @IsNotEmpty() @IsString()
    tipo: string;
    
}