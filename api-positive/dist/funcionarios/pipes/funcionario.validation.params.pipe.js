"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class FuncionarioValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.FuncionarioValidationParamsPipe = FuncionarioValidationParamsPipe;
//# sourceMappingURL=funcionario.validation.params.pipe.js.map