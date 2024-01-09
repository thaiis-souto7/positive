import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";
import { Pergunta } from "src/perguntas/interfaces/pergunta.interface";
export declare class CriarFormularioDto {
    descricao: Funcionario;
    responsavel: Funcionario;
    perguntas: Array<Pergunta>;
}
