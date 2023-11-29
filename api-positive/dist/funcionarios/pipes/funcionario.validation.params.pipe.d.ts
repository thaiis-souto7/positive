import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class FuncionarioValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
