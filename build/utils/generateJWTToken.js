"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWTToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const __1 = require("..");
const generateJWTToken = (userId) => {
    const expiresIn = '7d';
    const token = jsonwebtoken_1.default.sign({ _id: userId }, __1.SECRET_KEY, { expiresIn });
    return token;
};
exports.generateJWTToken = generateJWTToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVKV1RUb2tlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZW5lcmF0ZUpXVFRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdFQUE4QjtBQUU5QiwwQkFBK0I7QUFHeEIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE1BQXNCLEVBQVUsRUFBRTtJQUNoRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUE7SUFFdEIsTUFBTSxLQUFLLEdBQUcsc0JBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsY0FBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtJQUNsRSxPQUFPLEtBQUssQ0FBQTtBQUNmLENBQUMsQ0FBQTtBQUxZLFFBQUEsZ0JBQWdCLG9CQUs1QiJ9