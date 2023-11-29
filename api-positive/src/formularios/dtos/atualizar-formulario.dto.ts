import { IsArray, IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";
import { Pergunta } from "src/perguntas/interfaces/pergunta.interface";   

export class AtualizarFormularioDto{

    @IsString() @IsNotEmpty()
    responsavel: Funcionario;

    @IsString() @IsNotEmpty()
    usuario: Funcionario; 

    @IsArray() @IsNotEmpty()
    perguntas: Array<Pergunta>;

    @IsArray() @IsNotEmpty()
    respostas: Array<String>;

    @IsBoolean() @IsNotEmpty()
    resolvido: boolean;
}