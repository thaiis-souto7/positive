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
var LoginService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LoginService = LoginService_1 = class LoginService {
    constructor(loginModel) {
        this.loginModel = loginModel;
        this.logger = new common_1.Logger(LoginService_1.name);
    }
    async createFunc(criarLoginDto) {
        const loginCriado = await new this.loginModel(criarLoginDto);
        return loginCriado.save();
    }
    async updateFunc(_id, atualizarLoginDto) {
        const loginEncontrado = await this.loginModel.findOne({ _id }).exec();
        if (!loginEncontrado) {
            throw new common_1.NotFoundException('Login não encontrada');
        }
        await this.loginModel.findOneAndUpdate({ _id }, { $set: atualizarLoginDto }).exec();
    }
    async getAllFunc() {
        return await this.loginModel.find().exec();
    }
    async getFuncById(_id) {
        const loginEncontrado = await this.loginModel.findOne({ _id }).exec();
        if (!loginEncontrado) {
            throw new Error('Login não encontrada');
        }
        return loginEncontrado;
    }
    async deleteFunc(_id) {
        const loginEncontrado = await this.loginModel.findOne({ _id }).exec();
        if (!loginEncontrado) {
            throw new Error('Login não encontrada');
        }
        return await this.loginModel.deleteOne({ _id }).exec();
    }
};
LoginService = LoginService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Login')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map