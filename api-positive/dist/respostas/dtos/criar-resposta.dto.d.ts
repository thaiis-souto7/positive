import { Formulario } from "src/formularios/interfaces/formulario.interface";
import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";
import { Pergunta } from "src/perguntas/interfaces/pergunta.interface";
export declare class CriarRespostaDto {
    formulario_id: Formulario;
    usuario: Funcionario;
    itens: Array<{
        pergunta: Pergunta;
        resposta: string;
    }>;
    resolvido: boolean;
}
