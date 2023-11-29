"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class FormularioValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.FormularioValidationParamsPipe = FormularioValidationParamsPipe;
//# sourceMappingURL=formulario.validation.params.pipe.js.map