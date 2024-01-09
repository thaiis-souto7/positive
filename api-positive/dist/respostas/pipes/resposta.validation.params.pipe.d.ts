import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class RespostaValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
