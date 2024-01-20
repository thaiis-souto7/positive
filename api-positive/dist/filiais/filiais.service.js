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
var FiliaisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiliaisService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FiliaisService = FiliaisService_1 = class FiliaisService {
    constructor(filialModel) {
        this.filialModel = filialModel;
        this.logger = new common_1.Logger(FiliaisService_1.name);
    }
    async createFilial(criarFilialDto) {
        const { email } = criarFilialDto;
        const filialEncontrado = await this.filialModel.findOne({ email }).exec();
        if (filialEncontrado) {
            throw new common_1.BadRequestException('Filial já cadastrada');
        }
        const filialCriado = await new this.filialModel(criarFilialDto);
        return filialCriado.save();
    }
    async updateFilial(_id, atualizarFilialDto) {
        const filialEncontrado = await this.filialModel.findOne({ _id }).exec();
        if (!filialEncontrado) {
            throw new common_1.NotFoundException('Filial não encontrada');
        }
        await this.filialModel.findOneAndUpdate({ _id }, { $set: atualizarFilialDto }).exec();
    }
    async getAllFilial() {
        return await this.filialModel.find().exec();
    }
    async getFilialById(_id) {
        const filialEncontrado = await this.filialModel.findOne({ _id }).exec();
        if (!filialEncontrado) {
            throw new Error('Filial não encontrada');
        }
        return filialEncontrado;
    }
    async deleteFilial(_id) {
        const filialEncontrado = await this.filialModel.findOne({ _id }).exec();
        if (!filialEncontrado) {
            throw new Error('Filial não encontrada');
        }
        return await this.filialModel.deleteOne({ _id }).exec();
    }
};
FiliaisService = FiliaisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Filial')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FiliaisService);
exports.FiliaisService = FiliaisService;
//# sourceMappingURL=filiais.service.js.map