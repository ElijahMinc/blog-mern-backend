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
exports.UserService = void 0;
const User_1 = __importDefault(require("../modules/User/User"));
class UserService {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findById(id);
            if (!user)
                throw new Error("Такого пользователя нет");
            return user;
        });
    }
    find(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ email });
            return user;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.default.create(user);
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user.save();
        });
    }
}
exports.UserService = UserService;
exports.default = new UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvVXNlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQXdDO0FBR3hDLE1BQWEsV0FBVztJQUVmLE9BQU8sQ0FBQyxFQUFnRDs7WUFDM0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3BDLElBQUcsQ0FBQyxJQUFJO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTtZQUNwRCxPQUFPLElBQUksQ0FBQTtRQUNkLENBQUM7S0FBQTtJQUVLLElBQUksQ0FBQyxLQUFhOztZQUNyQixNQUFNLElBQUksR0FBRyxNQUFNLGNBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQzFDLE9BQU8sSUFBSSxDQUFBO1FBQ2QsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLElBQW1COztZQUM3QixPQUFPLE1BQU0sY0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsSUFBcUM7O1lBQy9DLE9BQU8sTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDM0IsQ0FBQztLQUFBO0NBQ0g7QUFwQkQsa0NBb0JDO0FBR0Qsa0JBQWUsSUFBSSxXQUFXLENBQUEifQ==