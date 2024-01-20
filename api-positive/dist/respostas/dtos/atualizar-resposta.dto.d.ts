import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";
import { Pergunta } from "src/perguntas/interfaces/pergunta.interface";
export declare class AtualizarRespostaDto {
    usuario: Funcionario;
    itens: Array<{
        pergunta: Pergunta;
        resposta: string;
    }>;
    resolvido: boolean;
}
