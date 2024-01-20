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
exports.PerguntasController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_pergunta_dto_1 = require("./dtos/atualizar-pergunta.dto");
const criar_pergunta_dto_1 = require("./dtos/criar-pergunta.dto");
const perguntas_service_1 = require("./perguntas.service");
const pergunta_validation_params_pipe_1 = require("./pipes/pergunta.validation.params.pipe");
let PerguntasController = class PerguntasController {
    constructor(pergunta) {
        this.pergunta = pergunta;
    }
    async createPerg(criarPerguntaDto) {
        return await this.pergunta.createPerg(criarPerguntaDto);
    }
    async updatePerg(atualizarPerguntaDto, _id) {
        await this.pergunta.updatePerg(_id, atualizarPerguntaDto);
    }
    async getAllPerg() {
        return await this.pergunta.getAllPerg();
    }
    async getOnePerg(_id) {
        return await this.pergunta.getPergById(_id);
    }
    async deletePerg(_id) {
        await this.pergunta.deletePerg(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_pergunta_dto_1.CriarPerguntaDto]),
    __metadata("design:returntype", Promise)
], PerguntasController.prototype, "createPerg", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', pergunta_validation_params_pipe_1.PerguntaValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_pergunta_dto_1.AtualizarPerguntaDto, String]),
    __metadata("design:returntype", Promise)
], PerguntasController.prototype, "updatePerg", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PerguntasController.prototype, "getAllPerg", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', pergunta_validation_params_pipe_1.PerguntaValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerguntasController.prototype, "getOnePerg", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', pergunta_validation_params_pipe_1.PerguntaValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerguntasController.prototype, "deletePerg", null);
PerguntasController = __decorate([
    (0, common_1.Controller)('api/perguntas'),
    __metadata("design:paramtypes", [perguntas_service_1.PerguntasService])
], PerguntasController);
exports.PerguntasController = PerguntasController;
//# sourceMappingURL=perguntas.controller.js.map