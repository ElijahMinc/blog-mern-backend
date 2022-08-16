"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const verifyPassword = (inputPassword, hashPassword) => {
    return bcrypt_1.default.compareSync(inputPassword, hashPassword);
};
exports.verifyPassword = verifyPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5UGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvdmVyaWZ5UGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0Esb0RBQTJCO0FBRXBCLE1BQU0sY0FBYyxHQUFHLENBQUMsYUFBcUIsRUFBRSxZQUFvQixFQUFFLEVBQUU7SUFDM0UsT0FBTyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFBO0FBRlksUUFBQSxjQUFjLGtCQUUxQiJ9