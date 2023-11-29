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
exports.FuncionariosController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_funcionario_dto_1 = require("./dtos/atualizar-funcionario.dto");
const criar_funcionario_dto_1 = require("./dtos/criar-funcionario.dto");
const funcionarios_service_1 = require("./funcionarios.service");
const funcionario_validation_params_pipe_1 = require("./pipes/funcionario.validation.params.pipe");
let FuncionariosController = class FuncionariosController {
    constructor(funcionario) {
        this.funcionario = funcionario;
    }
    async createFunc(criarFuncionarioDto) {
        return await this.funcionario.createFunc(criarFuncionarioDto);
    }
    async updateFunc(atualizarFuncionarioDto, _id) {
        await this.funcionario.updateFunc(_id, atualizarFuncionarioDto);
    }
    async getAllFunc() {
        return await this.funcionario.getAllFunc();
    }
    async getOneFunc(_id) {
        return await this.funcionario.getFuncById(_id);
    }
    async deleteFunc(_id) {
        await this.funcionario.deleteFunc(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_funcionario_dto_1.CriarFuncionarioDto]),
    __metadata("design:returntype", Promise)
], FuncionariosController.prototype, "createFunc", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', funcionario_validation_params_pipe_1.FuncionarioValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_funcionario_dto_1.AtualizarFuncionarioDto, String]),
    __metadata("design:returntype", Promise)
], FuncionariosController.prototype, "updateFunc", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FuncionariosController.prototype, "getAllFunc", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', funcionario_validation_params_pipe_1.FuncionarioValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuncionariosController.prototype, "getOneFunc", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', funcionario_validation_params_pipe_1.FuncionarioValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuncionariosController.prototype, "deleteFunc", null);
FuncionariosController = __decorate([
    (0, common_1.Controller)('/api/funcionarios'),
    __metadata("design:paramtypes", [funcionarios_service_1.FuncionariosService])
], FuncionariosController);
exports.FuncionariosController = FuncionariosController;
//# sourceMappingURL=funcionarios.controller.js.map