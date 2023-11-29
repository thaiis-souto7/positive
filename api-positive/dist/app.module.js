"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const funcionarios_module_1 = require("./funcionarios/funcionarios.module");
const filiais_module_1 = require("./filiais/filiais.module");
const perguntas_module_1 = require("./perguntas/perguntas.module");
const formularios_module_1 = require("./formularios/formularios.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://thaiis_souto:t09031999@positive.h5yx5yp.mongodb.net/positive?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }),
            funcionarios_module_1.FuncionariosModule, filiais_module_1.FiliaisModule, perguntas_module_1.PerguntasModule, formularios_module_1.FormulariosModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map