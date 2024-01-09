import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";
import { Formulario } from "src/formularios/interfaces/formulario.interface";
import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";
import { Pergunta } from "src/perguntas/interfaces/pergunta.interface";   

export class CriarRespostaDto{
    
    @IsString() @IsNotEmpty()
    formulario_id: Formulario;

    @IsString() @IsNotEmpty()
    usuario: Funcionario;

    @IsArray()
    itens: Array<{
        pergunta: Pergunta;
        resposta: string;
    }>;

    @IsBoolean()
    resolvido: boolean;

}