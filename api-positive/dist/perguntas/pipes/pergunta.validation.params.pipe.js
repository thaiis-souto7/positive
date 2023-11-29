"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerguntaValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class PerguntaValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.PerguntaValidationParamsPipe = PerguntaValidationParamsPipe;
//# sourceMappingURL=pergunta.validation.params.pipe.js.map