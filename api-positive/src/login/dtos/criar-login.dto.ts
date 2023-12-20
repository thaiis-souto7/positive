import { IsBoolean, IsNotEmpty } from "class-validator";
import { Funcionario } from "src/funcionarios/interfaces/funcionario.interface";

export class CriarLoginDto{
    
    @IsNotEmpty()
    funcionario_id: Funcionario;

    @IsBoolean() @IsNotEmpty()
    logout: boolean;

    
}