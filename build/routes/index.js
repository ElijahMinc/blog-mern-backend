"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('express').Router;
const auth_router_1 = __importDefault(require("./auth.router"));
const user_router_1 = __importDefault(require("./user.router"));
const post_router_1 = __importDefault(require("./post.router"));
const comments_router_1 = __importDefault(require("./comments.router"));
const socket_router_1 = __importDefault(require("./socket.router"));
const configRouter = new Router();
configRouter.use(auth_router_1.default);
configRouter.use(user_router_1.default);
configRouter.use(post_router_1.default);
configRouter.use(comments_router_1.default);
configRouter.use(socket_router_1.default);
exports.default = configRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtBQUV4QyxnRUFBc0M7QUFDdEMsZ0VBQXNDO0FBQ3RDLGdFQUFzQztBQUN0Qyx3RUFBOEM7QUFDOUMsb0VBQTBDO0FBRzFDLE1BQU0sWUFBWSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFHbEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLENBQUE7QUFDNUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLENBQUE7QUFDNUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLENBQUE7QUFDNUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLENBQUE7QUFDaEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyx1QkFBWSxDQUFDLENBQUE7QUFHOUIsa0JBQWUsWUFBWSxDQUFBIn0=