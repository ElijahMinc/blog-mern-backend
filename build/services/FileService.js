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
exports.FileService = void 0;
const Post_1 = __importDefault(require("../modules/Post/Post"));
class FileService {
    upload(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Post_1.default.find();
            return user;
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Post_1.default.create();
        });
    }
}
exports.FileService = FileService;
exports.default = new FileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvRmlsZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQXdDO0FBSXhDLE1BQWEsV0FBVztJQUVmLE1BQU0sQ0FBQyxJQUFVOztZQUNwQixNQUFNLElBQUksR0FBRyxNQUFNLGNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUM5QixPQUFPLElBQUksQ0FBQTtRQUNkLENBQUM7S0FBQTtJQUVLLE1BQU07O1lBQ1QsT0FBTyxNQUFNLGNBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUM3QixDQUFDO0tBQUE7Q0FDSDtBQVZELGtDQVVDO0FBR0Qsa0JBQWUsSUFBSSxXQUFXLENBQUEifQ==