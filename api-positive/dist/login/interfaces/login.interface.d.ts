import { Document } from 'mongoose';
import { Funcionario } from 'src/funcionarios/interfaces/funcionario.interface';
export interface Login extends Document {
    funcionario_id: Funcionario;
    logout: boolean;
}
