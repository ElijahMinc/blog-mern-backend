"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWTToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const __1 = require("..");
const verifyJWTToken = (token) => jsonwebtoken_1.default.verify(token, __1.SECRET_KEY);
exports.verifyJWTToken = verifyJWTToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5SldUVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvdmVyaWZ5SldUVG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0VBQThCO0FBQzlCLDBCQUErQjtBQUV4QixNQUFNLGNBQWMsR0FBRyxDQUFDLEtBQWEsRUFBNkMsRUFBRSxDQUFDLHNCQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxjQUFVLENBQUMsQ0FBQTtBQUE1RyxRQUFBLGNBQWMsa0JBQThGIn0=