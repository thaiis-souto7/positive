"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulariosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const formularios_controller_1 = require("./formularios.controller");
const formularios_service_1 = require("./formularios.service");
const formulario_schema_1 = require("./interfaces/formulario.schema");
let FormulariosModule = class FormulariosModule {
};
FormulariosModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Formulario', schema: formulario_schema_1.FormularioSchema }])],
        controllers: [formularios_controller_1.FormulariosController],
        exports: [formularios_service_1.FormulariosService],
        providers: [formularios_service_1.FormulariosService]
    })
], FormulariosModule);
exports.FormulariosModule = FormulariosModule;
//# sourceMappingURL=formularios.module.js.map