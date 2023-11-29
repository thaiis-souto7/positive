import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";
import { Pergunta } from "src/perguntas/interfaces/pergunta.interface";
export declare class AtualizarFormularioDto {
    responsavel: Funcionario;
    usuario: Funcionario;
    perguntas: Array<Pergunta>;
    respostas: Array<String>;
    resolvido: boolean;
}
