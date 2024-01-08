import { IsArray, IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";
import { Pergunta } from "src/perguntas/interfaces/pergunta.interface";   

export class AtualizarFormularioDto{

    @IsString() @IsNotEmpty()
    descricao: Funcionario;

    @IsString() @IsNotEmpty()
    responsavel: Funcionario;

    @IsArray()
    itens: Array<{
        pergunta: Pergunta;
        resposta: string;
    }>;

    @IsBoolean() @IsNotEmpty()
    resolvido: boolean;
}