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
var RespostaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespostaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RespostaService = RespostaService_1 = class RespostaService {
    constructor(respostaModel) {
        this.respostaModel = respostaModel;
        this.logger = new common_1.Logger(RespostaService_1.name);
    }
    async countAllResp() {
        return await this.respostaModel.countDocuments();
    }
    async createResp(criarRespostaDto) {
        const respostaCriado = await new this.respostaModel(criarRespostaDto);
        return respostaCriado.save();
    }
    async updateResp(_id, atualizarRespostaDto) {
        const respostaEncontrado = await this.respostaModel.findOne({ _id }).exec();
        if (!respostaEncontrado) {
            throw new common_1.NotFoundException('Formulário não encontrado');
        }
        await this.respostaModel.findOneAndUpdate({ _id }, { $set: atualizarRespostaDto }).exec();
    }
    async getAllResp() {
        return await this.respostaModel.find().exec();
    }
    async getRespById(_id) {
        const respostaEncontrado = await this.respostaModel.findOne({ _id }).exec();
        if (!respostaEncontrado) {
            throw new Error('Formulário não encontrado');
        }
        return respostaEncontrado;
    }
    async deleteResp(_id) {
        const respostaEncontrado = await this.respostaModel.findOne({ _id }).exec();
        if (!respostaEncontrado) {
            throw new Error('Formulário não encontrado');
        }
        return await this.respostaModel.deleteOne({ _id }).exec();
    }
};
RespostaService = RespostaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Resposta')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RespostaService);
exports.RespostaService = RespostaService;
//# sourceMappingURL=respostas.service.js.map