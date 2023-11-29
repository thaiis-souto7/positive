import { Document } from 'mongoose';
import { Funcionario } from 'src/funcionarios/interfaces/funcionario.interface';
import { Pergunta } from 'src/perguntas/interfaces/pergunta.interface';
export interface Formulario extends Document {
    responsavel: Funcionario;
    usuario: Funcionario;
    perguntas: Array<Pergunta>;
    respostas: Array<string>;
    data: Date;
    resolvido: boolean;
}
