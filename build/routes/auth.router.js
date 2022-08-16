"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../controllers/AuthController/AuthController"));
const validateUser_middleware_1 = require("../middlewares/validateUser.middleware");
const authRouter = (0, express_1.Router)();
authRouter.post(AuthController_1.default.loginUrl, validateUser_middleware_1.validateUser, AuthController_1.default.login);
authRouter.post(AuthController_1.default.registerUrl, validateUser_middleware_1.validateUser, AuthController_1.default.register);
exports.default = authRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2F1dGgucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQWlDO0FBRWpDLGtHQUEwRTtBQUMxRSxvRkFBcUU7QUFDckUsTUFBTSxVQUFVLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUE7QUFFM0IsVUFBVSxDQUFDLElBQUksQ0FBQyx3QkFBYyxDQUFDLFFBQVEsRUFBRSxzQ0FBWSxFQUFFLHdCQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDNUUsVUFBVSxDQUFDLElBQUksQ0FBQyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxzQ0FBWSxFQUFFLHdCQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7QUFJbEYsa0JBQWUsVUFBVSxDQUFBIn0=