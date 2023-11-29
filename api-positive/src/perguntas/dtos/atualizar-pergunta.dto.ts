import { IsDateString, IsEmail, IsNumber, IsString } from "class-validator";

export class AtualizarPerguntaDto{
    
    @IsString()
    pergunta: string;

}