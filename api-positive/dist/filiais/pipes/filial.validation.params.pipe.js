"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilialValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class FilialValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.FilialValidationParamsPipe = FilialValidationParamsPipe;
//# sourceMappingURL=filial.validation.params.pipe.js.map