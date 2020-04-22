"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sjcl_1 = __importDefault(require("sjcl"));
function SHA256(message) {
    var out = sjcl_1.default.hash.sha256.hash(message); // bitArray
    return sjcl_1.default.codec.hex.fromBits(out);
}
exports.default = SHA256;
