import { IsArray, IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Formulario } from "src/formularios/interfaces/formulario.interface";
import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";
import { Pergunta } from "src/perguntas/interfaces/pergunta.interface";   

export class AtualizarRespostaDto{

    @IsString() 
    usuario: Funcionario;

    @IsArray()
    itens: Array<{
        pergunta: Pergunta;
        resposta: string;
    }>;

    @IsBoolean()
    resolvido: boolean;

}