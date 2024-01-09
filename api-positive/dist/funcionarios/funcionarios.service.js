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
var FuncionariosService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionariosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FuncionariosService = FuncionariosService_1 = class FuncionariosService {
    constructor(funcionarioModel) {
        this.funcionarioModel = funcionarioModel;
        this.logger = new common_1.Logger(FuncionariosService_1.name);
    }
    async countAllFunc() {
        return await this.funcionarioModel.countDocuments();
    }
    async createFunc(criarFuncionarioDto) {
        const { email } = criarFuncionarioDto;
        const funcionarioEncontrado = await this.funcionarioModel.findOne({ email }).exec();
        if (funcionarioEncontrado) {
            throw new common_1.BadRequestException('Funcionário já cadastrado');
        }
        const funcionarioCriado = await new this.funcionarioModel(criarFuncionarioDto);
        return funcionarioCriado.save();
    }
    async updateFunc(_id, atualizarFuncionarioDto) {
        const funcionarioEncontrado = await this.funcionarioModel.findOne({ _id }).exec();
        if (!funcionarioEncontrado) {
            throw new common_1.NotFoundException('Funcionário não encontrado');
        }
        await this.funcionarioModel.findOneAndUpdate({ _id }, { $set: atualizarFuncionarioDto }).exec();
    }
    async getAllFunc() {
        return await this.funcionarioModel.find().exec();
    }
    async getFuncById(_id) {
        const funcionarioEncontrado = await this.funcionarioModel.findOne({ _id }).exec();
        if (!funcionarioEncontrado) {
            throw new Error('Funcionário não encontrado');
        }
        return funcionarioEncontrado;
    }
    async deleteFunc(_id) {
        const funcionarioEncontrado = await this.funcionarioModel.findOne({ _id }).exec();
        if (!funcionarioEncontrado) {
            throw new Error('Funcionário não encontrado');
        }
        return await this.funcionarioModel.deleteOne({ _id }).exec();
    }
};
FuncionariosService = FuncionariosService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Funcionario')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FuncionariosService);
exports.FuncionariosService = FuncionariosService;
//# sourceMappingURL=funcionarios.service.js.map