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
exports.FormulariosController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_formulario_dto_1 = require("./dtos/atualizar-formulario.dto");
const criar_formulario_dto_1 = require("./dtos/criar-formulario.dto");
const formularios_service_1 = require("./formularios.service");
const formulario_validation_params_pipe_1 = require("./pipes/formulario.validation.params.pipe");
let FormulariosController = class FormulariosController {
    constructor(formulario) {
        this.formulario = formulario;
    }
    async getCountForm() {
        return await this.formulario.countAllForm();
    }
    async getForms() {
        return await this.formulario.findForms();
    }
    async getFormSite() {
        return await this.formulario.findFormSite();
    }
    async createForm(criarFormularioDto) {
        return await this.formulario.createForm(criarFormularioDto);
    }
    async updateForm(atualizarFormularioDto, _id) {
        await this.formulario.updateForm(_id, atualizarFormularioDto);
    }
    async getAllForm() {
        return await this.formulario.getAllForm();
    }
    async getOneForm(_id) {
        return await this.formulario.getFormById(_id);
    }
    async deleteForm(_id) {
        await this.formulario.deleteForm(_id);
    }
};
__decorate([
    (0, common_1.Get)('/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormulariosController.prototype, "getCountForm", null);
__decorate([
    (0, common_1.Get)('/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormulariosController.prototype, "getForms", null);
__decorate([
    (0, common_1.Get)('/findSite'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormulariosController.prototype, "getFormSite", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_formulario_dto_1.CriarFormularioDto]),
    __metadata("design:returntype", Promise)
], FormulariosController.prototype, "createForm", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', formulario_validation_params_pipe_1.FormularioValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_formulario_dto_1.AtualizarFormularioDto, String]),
    __metadata("design:returntype", Promise)
], FormulariosController.prototype, "updateForm", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormulariosController.prototype, "getAllForm", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', formulario_validation_params_pipe_1.FormularioValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FormulariosController.prototype, "getOneForm", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', formulario_validation_params_pipe_1.FormularioValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FormulariosController.prototype, "deleteForm", null);
FormulariosController = __decorate([
    (0, common_1.Controller)('api/formularios'),
    __metadata("design:paramtypes", [formularios_service_1.FormulariosService])
], FormulariosController);
exports.FormulariosController = FormulariosController;
//# sourceMappingURL=formularios.controller.js.map