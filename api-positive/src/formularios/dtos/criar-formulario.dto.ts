import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";
import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";
import { Pergunta } from "src/perguntas/interfaces/pergunta.interface";   

export class CriarFormularioDto{
    
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