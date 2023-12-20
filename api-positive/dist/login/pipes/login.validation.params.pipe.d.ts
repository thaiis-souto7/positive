import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class LoginValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
