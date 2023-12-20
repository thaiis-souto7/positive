"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const mongoose = require("mongoose");
exports.LoginSchema = new mongoose.Schema({
    funcionario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
    logout: { type: Boolean, required: true, default: false },
}, { timestamps: true, collection: 'login' });
//# sourceMappingURL=login.schema.js.map