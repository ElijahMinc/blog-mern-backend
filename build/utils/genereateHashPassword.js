"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateHashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 6;
    const hashPassword = yield bcrypt_1.default.hash(password, saltRounds);
    return hashPassword;
});
exports.generateHashPassword = generateHashPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJlYXRlSGFzaFBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2dlbmVyZWF0ZUhhc2hQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBMkI7QUFFcEIsTUFBTSxvQkFBb0IsR0FBRyxDQUFPLFFBQWdCLEVBQW1CLEVBQUU7SUFDN0UsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLE1BQU0sWUFBWSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQzVELE9BQU8sWUFBWSxDQUFBO0FBQ3RCLENBQUMsQ0FBQSxDQUFBO0FBSlksUUFBQSxvQkFBb0Isd0JBSWhDIn0=