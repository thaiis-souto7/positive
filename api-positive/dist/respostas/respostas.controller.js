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
exports.RespostasController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_resposta_dto_1 = require("./dtos/atualizar-resposta.dto");
const criar_resposta_dto_1 = require("./dtos/criar-resposta.dto");
const respostas_service_1 = require("./respostas.service");
const resposta_validation_params_pipe_1 = require("./pipes/resposta.validation.params.pipe");
let RespostasController = class RespostasController {
    constructor(resposta) {
        this.resposta = resposta;
    }
    async createFunc(criarRespostaDto) {
        return await this.resposta.createFunc(criarRespostaDto);
    }
    async updateFunc(atualizarRespostaDto, _id) {
        await this.resposta.updateFunc(_id, atualizarRespostaDto);
    }
    async getAllFunc() {
        return await this.resposta.getAllFunc();
    }
    async getOneFunc(_id) {
        return await this.resposta.getFuncById(_id);
    }
    async deleteFunc(_id) {
        await this.resposta.deleteFunc(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_resposta_dto_1.CriarRespostaDto]),
    __metadata("design:returntype", Promise)
], RespostasController.prototype, "createFunc", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', resposta_validation_params_pipe_1.RespostaValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_resposta_dto_1.AtualizarRespostaDto, String]),
    __metadata("design:returntype", Promise)
], RespostasController.prototype, "updateFunc", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RespostasController.prototype, "getAllFunc", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', resposta_validation_params_pipe_1.RespostaValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RespostasController.prototype, "getOneFunc", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', resposta_validation_params_pipe_1.RespostaValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RespostasController.prototype, "deleteFunc", null);
RespostasController = __decorate([
    (0, common_1.Controller)('api/respostas'),
    __metadata("design:paramtypes", [respostas_service_1.RespostaService])
], RespostasController);
exports.RespostasController = RespostasController;
//# sourceMappingURL=respostas.controller.js.map