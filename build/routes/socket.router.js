"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoomController_1 = __importDefault(require("../controllers/RoomController/RoomController"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const cors_middleware_1 = __importDefault(require("../middlewares/cors.middleware"));
const socketRouter = (0, express_1.Router)();
socketRouter.post(RoomController_1.default.joinRoomUrl, auth_middleware_1.default, cors_middleware_1.default, RoomController_1.default.joinRoom);
socketRouter.get(RoomController_1.default.getRoomUrl, auth_middleware_1.default, cors_middleware_1.default, RoomController_1.default.getRooms);
exports.default = socketRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvc29ja2V0LnJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFvRDtBQUNwRCxrR0FBNEU7QUFDNUUscUZBQTREO0FBQzVELHFGQUE0RDtBQUc1RCxNQUFNLFlBQVksR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQTtBQUk3QixZQUFZLENBQUMsSUFBSSxDQUFDLHdCQUFnQixDQUFDLFdBQVcsRUFBRSx5QkFBYyxFQUFFLHlCQUFjLEVBQUUsd0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDMUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyx3QkFBZ0IsQ0FBQyxVQUFVLEVBQUUseUJBQWMsRUFBRSx5QkFBYyxFQUFFLHdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBTXhHLGtCQUFlLFlBQVksQ0FBQSJ9