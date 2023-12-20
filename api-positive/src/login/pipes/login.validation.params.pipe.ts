import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';

export class LoginValidationParamsPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }

        return value;
    }
}