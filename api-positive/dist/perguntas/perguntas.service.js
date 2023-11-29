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
var PerguntasService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerguntasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PerguntasService = PerguntasService_1 = class PerguntasService {
    constructor(perguntaModel) {
        this.perguntaModel = perguntaModel;
        this.logger = new common_1.Logger(PerguntasService_1.name);
    }
    async createFunc(criarPerguntaDto) {
        const { pergunta } = criarPerguntaDto;
        const perguntaEncontrado = await this.perguntaModel.findOne({ pergunta }).exec();
        if (perguntaEncontrado) {
            throw new common_1.BadRequestException('Pergunta já cadastrada');
        }
        const perguntaCriado = await new this.perguntaModel(criarPerguntaDto);
        return perguntaCriado.save();
    }
    async updateFunc(_id, atualizarPerguntaDto) {
        const perguntaEncontrado = await this.perguntaModel.findOne({ _id }).exec();
        if (!perguntaEncontrado) {
            throw new common_1.NotFoundException('Pergunta não encontrada');
        }
        await this.perguntaModel.findOneAndUpdate({ _id }, { $set: atualizarPerguntaDto }).exec();
    }
    async getAllFunc() {
        return await this.perguntaModel.find().exec();
    }
    async getFuncById(_id) {
        const perguntaEncontrado = await this.perguntaModel.findOne({ _id }).exec();
        if (!perguntaEncontrado) {
            throw new Error('Pergunta não encontrada');
        }
        return perguntaEncontrado;
    }
    async deleteFunc(_id) {
        const perguntaEncontrado = await this.perguntaModel.findOne({ _id }).exec();
        if (!perguntaEncontrado) {
            throw new Error('Pergunta não encontrada');
        }
        return await this.perguntaModel.deleteOne({ _id }).exec();
    }
};
PerguntasService = PerguntasService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Pergunta')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PerguntasService);
exports.PerguntasService = PerguntasService;
//# sourceMappingURL=perguntas.service.js.map