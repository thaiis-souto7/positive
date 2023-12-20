import { IsBoolean, IsString } from "class-validator";
import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";

export class AtualizarLoginDto{
    
    funcionario_id: Funcionario;

    @IsBoolean()
    logout: boolean;

}