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
exports.FiliaisController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_filial_dto_1 = require("./dtos/atualizar-filial.dto");
const criar_filial_dto_1 = require("./dtos/criar-filial.dto");
const filiais_service_1 = require("./filiais.service");
const filial_validation_params_pipe_1 = require("./pipes/filial.validation.params.pipe");
let FiliaisController = class FiliaisController {
    constructor(filial) {
        this.filial = filial;
    }
    async createFilial(criarFilialDto) {
        return await this.filial.createFilial(criarFilialDto);
    }
    async updateFilial(atualizarFilialDto, _id) {
        await this.filial.updateFilial(_id, atualizarFilialDto);
    }
    async getAllFilial() {
        return await this.filial.getAllFilial();
    }
    async getOneFilial(_id) {
        return await this.filial.getFilialById(_id);
    }
    async deleteFilial(_id) {
        await this.filial.deleteFilial(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_filial_dto_1.CriarFilialDto]),
    __metadata("design:returntype", Promise)
], FiliaisController.prototype, "createFilial", null);
__decorate([
    (0, common_1.Put)('/:_id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('_id', filial_validation_params_pipe_1.FilialValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_filial_dto_1.AtualizarFilialDto, String]),
    __metadata("design:returntype", Promise)
], FiliaisController.prototype, "updateFilial", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FiliaisController.prototype, "getAllFilial", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id', filial_validation_params_pipe_1.FilialValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiliaisController.prototype, "getOneFilial", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id', filial_validation_params_pipe_1.FilialValidationParamsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiliaisController.prototype, "deleteFilial", null);
FiliaisController = __decorate([
    (0, common_1.Controller)('api/filiais'),
    __metadata("design:paramtypes", [filiais_service_1.FiliaisService])
], FiliaisController);
exports.FiliaisController = FiliaisController;
//# sourceMappingURL=filiais.controller.js.map