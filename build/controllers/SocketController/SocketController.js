"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketController = void 0;
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const RoomService_1 = __importDefault(require("../../services/RoomService"));
const uuid_1 = require("uuid");
class SocketController {
    constructor(app) {
        this.server = http_1.default.createServer(app);
        this.io = new socket_io_1.Server(this.server);
        this.init();
    }
    roomJoin({ roomId, userName, userAvatar }, socket, clientId) {
        var _a, _b, _c, _d, _e, _f;
        socket.join(roomId);
        (_b = (_a = RoomService_1.default.get(roomId)) === null || _a === void 0 ? void 0 : _a.get('users')) === null || _b === void 0 ? void 0 : _b.set(clientId, { userName, userAvatar });
        const users = [...(_d = (_c = RoomService_1.default.get(roomId)) === null || _c === void 0 ? void 0 : _c.get('users')) === null || _d === void 0 ? void 0 : _d.values()];
        const allMessagesByRoomId = [...(_f = (_e = RoomService_1.default === null || RoomService_1.default === void 0 ? void 0 : RoomService_1.default.get(roomId)) === null || _e === void 0 ? void 0 : _e.get('messages')) === null || _f === void 0 ? void 0 : _f.values()];
        this.io.to(roomId).emit('ROOM:JOINED', allMessagesByRoomId);
        this.io.to(roomId).emit('USERS:SET', users);
    }
    newMessage({ text, userName, roomId, userAvatar, userId }) {
        var _a, _b, _c;
        const messages = (_a = RoomService_1.default === null || RoomService_1.default === void 0 ? void 0 : RoomService_1.default.get(roomId)) === null || _a === void 0 ? void 0 : _a.get('messages');
        messages.set((0, uuid_1.v4)(), { userName, text, userAvatar, userId, roomId });
        const allMessagesByRoomId = [...(_c = (_b = RoomService_1.default === null || RoomService_1.default === void 0 ? void 0 : RoomService_1.default.get(roomId)) === null || _b === void 0 ? void 0 : _b.get('messages')) === null || _c === void 0 ? void 0 : _c.values()];
        this.io.to(roomId).emit('NEW:MESSAGE', allMessagesByRoomId);
    }
    messageWriting(data, clientId) {
        var _a, _b;
        const user = (_b = (_a = RoomService_1.default === null || RoomService_1.default === void 0 ? void 0 : RoomService_1.default.get(data.roomId)) === null || _a === void 0 ? void 0 : _a.get('users')) === null || _b === void 0 ? void 0 : _b.get(clientId);
        this.io.to(data.roomId).emit('MESSAGE:WRITING', { userName: user.userName });
    }
    init() {
        this.io.on('connection', (socket) => {
            const clientId = socket.id;
            socket.on('ROOM:JOIN', (roomData) => this.roomJoin(roomData, socket, clientId));
            socket.on('NEW:MESSAGE', this.newMessage.bind(this));
            socket.on('MESSAGE:WRITING', (data) => this.messageWriting(data, clientId));
            socket.on('disconnect', () => this.disconnect(clientId));
        });
    }
    disconnect(clientId) {
        RoomService_1.default.forEach((value, keyAsRoomId) => {
            if (value.get('users').has(clientId)) {
                const leaveName = value.get('users').get(clientId);
                this.io.to(keyAsRoomId).emit('ROOM:LEAVE', leaveName);
                value.get('users').delete(clientId);
                const users = [...value.get('users').values()];
                if (!users.length) {
                    RoomService_1.default.delete(keyAsRoomId);
                }
                this.io.to(keyAsRoomId).emit('USERS:SET', users);
            }
        });
    }
}
exports.SocketController = SocketController;
exports.default = SocketController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9Tb2NrZXRDb250cm9sbGVyL1NvY2tldENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsZ0RBQXVCO0FBQ3ZCLHlDQUEyQztBQUUzQyw2RUFBcUQ7QUFDckQsK0JBQWtDO0FBR2xDLE1BQWEsZ0JBQWdCO0lBVzFCLFlBQVksR0FBaUI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxrQkFBTSxDQUE0RSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFNUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUVELFFBQVEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFvQixFQUFFLE1BQXlGLEVBQUUsUUFBZ0I7O1FBQ3BLLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFbkIsTUFBQSxNQUFBLHFCQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQywwQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLDBDQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQTtRQUU1RSxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsTUFBQSxNQUFBLHFCQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQywwQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLDBDQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDbEUsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsTUFBQSxNQUFBLHFCQUFXLGFBQVgscUJBQVcsdUJBQVgscUJBQVcsQ0FBRSxHQUFHLENBQUMsTUFBTSxDQUFDLDBDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsMENBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUVwRixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsVUFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBbUI7O1FBQ3RFLE1BQU0sUUFBUSxHQUFHLE1BQUEscUJBQVcsYUFBWCxxQkFBVyx1QkFBWCxxQkFBVyxDQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsMENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFELFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBQSxTQUFNLEdBQUUsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFBO1FBRXBFLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLE1BQUEsTUFBQSxxQkFBVyxhQUFYLHFCQUFXLHVCQUFYLHFCQUFXLENBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQywwQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLDBDQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDcEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFRCxjQUFjLENBQUMsSUFBaUYsRUFBRSxRQUFnQjs7UUFDL0csTUFBTSxJQUFJLEdBQUcsTUFBQSxNQUFBLHFCQUFXLGFBQVgscUJBQVcsdUJBQVgscUJBQVcsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLDBDQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQzdFLENBQUM7SUFFRCxJQUFJO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQTtZQUUxQixNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDL0UsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUNwRCxNQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO1lBQzNFLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUMzRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFHRCxVQUFVLENBQUMsUUFBZ0I7UUFDeEIscUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUU7WUFFeEMsSUFBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQztnQkFDakMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBRWxELElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBRXJELEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUVuQyxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO2dCQUU5QyxJQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDZixxQkFBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtpQkFDakM7Z0JBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQTthQUVsRDtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUNIO0FBNUVELDRDQTRFQztBQUVELGtCQUFnQixnQkFBZ0IsQ0FBQSJ9