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
exports.RoomController = void 0;
const RoomService_1 = __importDefault(require("../../services/RoomService"));
class RoomController {
    constructor() {
        this.joinRoomUrl = '/join-room';
        this.getRoomUrl = '/rooms';
    }
    joinRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName, roomId } = req.body;
                if (!roomId) {
                    return res.status(400).json({
                        message: 'You not enter userName or roomId'
                    });
                }
                if (!RoomService_1.default.has(roomId)) {
                    RoomService_1.default.set(roomId, new Map([
                        ['users', new Map()],
                        ['messages', new Map()]
                    ]));
                }
                const roomNames = [...RoomService_1.default.keys()];
                return res.json(roomNames);
            }
            catch (e) {
                return res.status(500).json({
                    message: 'Error with Join Room'
                });
            }
        });
    }
    getRooms(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roomNames = [...RoomService_1.default.keys()];
                return res.json(roomNames);
            }
            catch (e) {
                console.log('e', e);
                return res.status(500).json({
                    message: 'Failed with get Rooms'
                });
            }
        });
    }
}
exports.RoomController = RoomController;
exports.default = new RoomController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vbUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvUm9vbUNvbnRyb2xsZXIvUm9vbUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsNkVBQW9EO0FBR3BELE1BQWEsY0FBYztJQUEzQjtRQUVHLGdCQUFXLEdBQUcsWUFBWSxDQUFBO1FBQzFCLGVBQVUsR0FBRyxRQUFRLENBQUE7SUE0Q3hCLENBQUM7SUExQ1EsUUFBUSxDQUFDLEdBQWdCLEVBQUUsR0FBYTs7WUFDM0MsSUFBSTtnQkFDRCxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUE0QyxDQUFBO2dCQUM3RSxJQUFHLENBQUMsTUFBTSxFQUFDO29CQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ3pCLE9BQU8sRUFBRSxrQ0FBa0M7cUJBQzdDLENBQUMsQ0FBQTtpQkFDSjtnQkFDRCxJQUFHLENBQUMscUJBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUM7b0JBQ3pCLHFCQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRyxJQUFJLEdBQUcsQ0FDN0I7d0JBQ0csQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQzt3QkFDcEIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztxQkFDekIsQ0FFSCxDQUFDLENBQUE7aUJBQ0o7Z0JBRUQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLHFCQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtnQkFFekMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBRTVCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDekIsT0FBTyxFQUFFLHNCQUFzQjtpQkFDakMsQ0FBQyxDQUFBO2FBQ0o7UUFDSixDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsQ0FBYyxFQUFFLEdBQWE7O1lBQ3pDLElBQUk7Z0JBQ0QsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLHFCQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtnQkFFekMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBRTVCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSx1QkFBdUI7aUJBQ2xDLENBQUMsQ0FBQTthQUNKO1FBQ0osQ0FBQztLQUFBO0NBQ0g7QUEvQ0Qsd0NBK0NDO0FBRUQsa0JBQWUsSUFBSSxjQUFjLENBQUEifQ==