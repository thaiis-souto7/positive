import { Document } from 'mongoose';
import { Funcionario } from 'src/funcionarios/interfaces/funcionario.interface';
import { Pergunta } from 'src/perguntas/interfaces/pergunta.interface';
export interface Formulario extends Document {
    descricao: String;
    responsavel: Funcionario;
    perguntas: Array<Pergunta>;
}
