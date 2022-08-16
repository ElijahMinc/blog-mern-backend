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
exports.AuthController = void 0;
const UserService_1 = __importDefault(require("../../services/UserService"));
const genereateHashPassword_1 = require("../../utils/genereateHashPassword");
const generateJWTToken_1 = require("../../utils/generateJWTToken");
const User_1 = __importDefault(require("../../modules/User/User"));
const verifyPassword_1 = require("../../utils/verifyPassword");
const express_validator_1 = require("express-validator");
const ErrorService_1 = require("../../services/ErrorService");
class AuthController {
    constructor() {
        this.registerUrl = '/register';
        this.loginUrl = '/login';
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return next(ErrorService_1.ApiError.BadRequest('Failed Login', errors.array()));
                }
                const { email, password } = req.body;
                const user = yield UserService_1.default.find(email);
                if (!user) {
                    return next(ErrorService_1.ApiError.BadRequest('There is no such user'));
                }
                const validPassword = (0, verifyPassword_1.verifyPassword)(password, user.password);
                if (!validPassword) {
                    return next(ErrorService_1.ApiError.BadRequest('Wrong password'));
                }
                const token = (0, generateJWTToken_1.generateJWTToken)(user._id);
                return res.status(200).json({
                    message: 'Вы успешно авторизировались',
                    user,
                    token
                });
            }
            catch (e) {
                console.log('ERROR', e);
                next(e);
            }
        });
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstname, lastname, email, password } = req.body;
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return next(ErrorService_1.ApiError.BadRequest('Failed Register', errors.array()));
                }
                const hasUser = yield UserService_1.default.find(email);
                if (hasUser) {
                    return next(ErrorService_1.ApiError.BadRequest('Such a user already exists'));
                }
                const hashPassword = yield (0, genereateHashPassword_1.generateHashPassword)(password);
                const user = new User_1.default({
                    email,
                    firstname,
                    lastname,
                    password: hashPassword
                });
                const token = (0, generateJWTToken_1.generateJWTToken)(user._id);
                const newUser = yield user.save();
                return res.status(200).json({
                    message: 'Пользователь успешно создан',
                    user: newUser,
                    token
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.AuthController = AuthController;
exports.default = new AuthController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkVBQXFEO0FBQ3JELDZFQUF5RTtBQUN6RSxtRUFBZ0U7QUFDaEUsbUVBQTJDO0FBQzNDLCtEQUE0RDtBQUM1RCx5REFBcUQ7QUFDckQsOERBQXVEO0FBRXZELE1BQWEsY0FBYztJQUEzQjtRQUNHLGdCQUFXLEdBQVcsV0FBVyxDQUFBO1FBQ2pDLGFBQVEsR0FBVyxRQUFRLENBQUE7SUFrRjlCLENBQUM7SUFoRlEsS0FBSyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7O1lBQ3hELElBQUk7Z0JBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBQSxvQ0FBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtnQkFFcEMsSUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBQztvQkFDaEIsT0FBTyxJQUFJLENBQUMsdUJBQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7aUJBQ3BFO2dCQUVELE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTtnQkFFcEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxxQkFBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFFMUMsSUFBRyxDQUFDLElBQUksRUFBQztvQkFDTixPQUFPLElBQUksQ0FBQyx1QkFBUSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7aUJBRTNEO2dCQUVELE1BQU0sYUFBYSxHQUFHLElBQUEsK0JBQWMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUU3RCxJQUFHLENBQUMsYUFBYSxFQUFDO29CQUNmLE9BQU8sSUFBSSxDQUFDLHVCQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtpQkFDcEQ7Z0JBRUQsTUFBTSxLQUFLLEdBQUcsSUFBQSxtQ0FBZ0IsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBR3hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSw2QkFBNkI7b0JBQ3RDLElBQUk7b0JBQ0osS0FBSztpQkFDUCxDQUFDLENBQUE7YUFFSjtZQUNELE9BQU8sQ0FBQyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDVDtRQUNKLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOztZQUUzRCxJQUFJO2dCQUNELE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO2dCQUV6RCxNQUFNLE1BQU0sR0FBRyxJQUFBLG9DQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUVwQyxJQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFDO29CQUVsQixPQUFRLElBQUksQ0FBQyx1QkFBUSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO2lCQUN0RTtnQkFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLHFCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUU3QyxJQUFHLE9BQU8sRUFBQztvQkFDUixPQUFPLElBQUksQ0FBQyx1QkFBUSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7aUJBQ2hFO2dCQUVELE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBQSw0Q0FBb0IsRUFBQyxRQUFRLENBQUMsQ0FBQTtnQkFFekQsTUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUM7b0JBQ25CLEtBQUs7b0JBQ0wsU0FBUztvQkFDVCxRQUFRO29CQUNSLFFBQVEsRUFBRSxZQUFZO2lCQUN4QixDQUFDLENBQUE7Z0JBRUYsTUFBTSxLQUFLLEdBQUcsSUFBQSxtQ0FBZ0IsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBRXpDLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUVoQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN6QixPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLO2lCQUNQLENBQUMsQ0FBQTthQUNKO1lBQ0QsT0FBTyxDQUFDLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ1Q7UUFDSixDQUFDO0tBQUE7Q0FDSDtBQXBGRCx3Q0FvRkM7QUFFRCxrQkFBZSxJQUFJLGNBQWMsQ0FBQSJ9