"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_login_dto_1 = require("./dtos/atualizar-login.dto");
const criar_login_dto_1 = require("./dtos/criar-login.dto");
const login_service_1 = require("./login.service");
const login_validation_params_pipe_1 = require("./pipes/login.validation.params.pipe");
let LoginController = class LoginController {
    constructor(login) {
        this.login = login;
    }
    async createFunc(criarLoginDto) {
        return await this.login.createFunc(criarLoginDto);
    }
    async updateFunc(atualizarLoginDto, _id) {
        await this.login.updateFunc(_id, atualizarLoginDto);
    }
    async getAllFunc() {
        return await this.login.getAllFunc();
    }
    async getOneFunc(_id) {
        return await this.login.getFuncById(_id);
    }
    async deleteFunc(_id) {
        await this.login.deleteFunc(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_login_dto_1.CriarLoginDto]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "createFunc", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', login_validation_params_pipe_1.LoginValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_login_dto_1.AtualizarLoginDto, String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "updateFunc", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getAllFunc", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', login_validation_params_pipe_1.LoginValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getOneFunc", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', login_validation_params_pipe_1.LoginValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "deleteFunc", null);
LoginController = __decorate([
    (0, common_1.Controller)('api/login'),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map