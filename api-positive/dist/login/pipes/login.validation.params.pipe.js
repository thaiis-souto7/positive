"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidationParamsPipe = void 0;
const common_1 = require("@nestjs/common");
class LoginValidationParamsPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.LoginValidationParamsPipe = LoginValidationParamsPipe;
//# sourceMappingURL=login.validation.params.pipe.js.map