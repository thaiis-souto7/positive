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
var FormulariosService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulariosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FormulariosService = FormulariosService_1 = class FormulariosService {
    constructor(formularioModel) {
        this.formularioModel = formularioModel;
        this.logger = new common_1.Logger(FormulariosService_1.name);
    }
    async createFunc(criarFormularioDto) {
        const formularioCriado = await new this.formularioModel(criarFormularioDto);
        return formularioCriado.save();
    }
    async updateFunc(_id, atualizarFormularioDto) {
        const formularioEncontrado = await this.formularioModel.findOne({ _id }).exec();
        if (!formularioEncontrado) {
            throw new common_1.NotFoundException('Formulário não encontrado');
        }
        await this.formularioModel.findOneAndUpdate({ _id }, { $set: atualizarFormularioDto }).exec();
    }
    async getAllFunc() {
        return await this.formularioModel.find().exec();
    }
    async getFuncById(_id) {
        const formularioEncontrado = await this.formularioModel.findOne({ _id }).exec();
        if (!formularioEncontrado) {
            throw new Error('Formulário não encontrado');
        }
        return formularioEncontrado;
    }
    async deleteFunc(_id) {
        const formularioEncontrado = await this.formularioModel.findOne({ _id }).exec();
        if (!formularioEncontrado) {
            throw new Error('Formulário não encontrado');
        }
        return await this.formularioModel.deleteOne({ _id }).exec();
    }
};
FormulariosService = FormulariosService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Formulario')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FormulariosService);
exports.FormulariosService = FormulariosService;
//# sourceMappingURL=formularios.service.js.map