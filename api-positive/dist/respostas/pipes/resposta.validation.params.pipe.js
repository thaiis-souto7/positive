"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespostaValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class RespostaValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.RespostaValidationParamsPipe = RespostaValidationParamsPipe;
//# sourceMappingURL=resposta.validation.params.pipe.js.map