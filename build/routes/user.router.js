"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserContoller/UserController"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const cors_middleware_1 = __importDefault(require("../middlewares/cors.middleware"));
const multer_1 = __importDefault(require("../utils/multer"));
const userRouter = (0, express_1.Router)();
userRouter.get(UserController_1.default.getUserUrl, auth_middleware_1.default, cors_middleware_1.default, UserController_1.default.getUser);
userRouter.post(UserController_1.default.createUserUrl, auth_middleware_1.default, cors_middleware_1.default, UserController_1.default.createUser);
userRouter.put(UserController_1.default.setAvatarUrl, auth_middleware_1.default, cors_middleware_1.default, multer_1.default.single("image"), UserController_1.default.setAvatar);
userRouter.delete(UserController_1.default.deleteAvatarUrl, auth_middleware_1.default, cors_middleware_1.default, UserController_1.default.deleteAvatar);
exports.default = userRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3VzZXIucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQW9EO0FBQ3BELGlHQUF5RTtBQUN6RSxxRkFBNEQ7QUFDNUQscUZBQTREO0FBQzVELDZEQUFzQztBQUV0QyxNQUFNLFVBQVUsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQTtBQUczQixVQUFVLENBQUMsR0FBRyxDQUFDLHdCQUFjLENBQUMsVUFBVSxFQUFFLHlCQUFjLEVBQUUseUJBQWMsRUFBRSx3QkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ2pHLFVBQVUsQ0FBQyxJQUFJLENBQUMsd0JBQWMsQ0FBQyxhQUFhLEVBQUUseUJBQWMsRUFBRSx5QkFBYyxFQUFFLHdCQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDeEcsVUFBVSxDQUFDLEdBQUcsQ0FBQyx3QkFBYyxDQUFDLFlBQVksRUFBRSx5QkFBYyxFQUFFLHlCQUFjLEVBQUUsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsd0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUM3SCxVQUFVLENBQUMsTUFBTSxDQUFDLHdCQUFjLENBQUMsZUFBZSxFQUFFLHlCQUFjLEVBQUUseUJBQWMsRUFBRSx3QkFBYyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBSzlHLGtCQUFlLFVBQVUsQ0FBQSJ9