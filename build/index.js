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
exports.SECRET_KEY = exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const SocketController_1 = __importDefault(require("./controllers/SocketController/SocketController"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
exports.app = (0, express_1.default)();
const socket = new SocketController_1.default(exports.app);
exports.SECRET_KEY = 'secret_key';
const CONNECT_DB = process.env.MONGODB_CONNECT || 'mongodb+srv://Ilya:1998ventru1998@cluster0.ewigdl3.mongodb.net/?retryWrites=true&w=majority';
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(index_1.default);
exports.app.use(error_middleware_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(CONNECT_DB);
        socket.server.listen(process.env.PORT || 9000, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 9000}`);
        });
    }
    catch (e) {
        console.log('error');
    }
});
start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUJBQXNCO0FBRXRCLHNEQUE2QjtBQUM3Qix3REFBZ0M7QUFDaEMsZ0RBQXVCO0FBRXZCLDJEQUF5QztBQUN6Qyx1R0FBK0U7QUFDL0Usc0ZBQTBEO0FBRTdDLFFBQUEsR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFHLElBQUksMEJBQWdCLENBQUMsV0FBRyxDQUFDLENBQUE7QUFHM0IsUUFBQSxVQUFVLEdBQUcsWUFBWSxDQUFBO0FBR3RDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxJQUFJLDZGQUE2RixDQUFDO0FBRWhKLFdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDO0FBQ2hCLFdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBSXhCLFdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBWSxDQUFDLENBQUE7QUFFckIsV0FBRyxDQUFDLEdBQUcsQ0FBQywwQkFBWSxDQUFDLENBQUE7QUFHckIsTUFBTSxLQUFLLEdBQUcsR0FBUyxFQUFFO0lBQ3RCLElBQUk7UUFFRCxNQUFNLGtCQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRWxDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvRixDQUFDLENBQUMsQ0FBQztLQUlOO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBRXRCO0FBRUosQ0FBQyxDQUFBLENBQUE7QUFFRCxLQUFLLEVBQUUsQ0FBQSJ9