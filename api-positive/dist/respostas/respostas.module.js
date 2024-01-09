"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespostasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const respostas_controller_1 = require("./respostas.controller");
const respostas_service_1 = require("./respostas.service");
const resposta_schema_1 = require("./interfaces/resposta.schema");
let RespostasModule = class RespostasModule {
};
RespostasModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Resposta', schema: resposta_schema_1.RespostaSchema }])],
        controllers: [respostas_controller_1.RespostasController],
        providers: [respostas_service_1.RespostaService]
    })
], RespostasModule);
exports.RespostasModule = RespostasModule;
//# sourceMappingURL=respostas.module.js.map