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
exports.UserController = void 0;
const UserService_1 = __importDefault(require("../../services/UserService"));
const PostService_1 = __importDefault(require("../../services/PostService"));
const CommentService_1 = __importDefault(require("../../services/CommentService"));
const cloudinary_1 = __importDefault(require("../../utils/cloudinary"));
class UserController {
    constructor() {
        this.setAvatarUrl = '/user/avatar';
        this.deleteAvatarUrl = '/user/avatar';
        this.getUserUrl = '/user';
        this.createUserUrl = '/user';
        this.updateUserUrl = '/user';
        this.deleteUserUrl = '/user';
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserService_1.default.getById(req === null || req === void 0 ? void 0 : req.userId);
                return res.status(200).json(user);
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with get'
                });
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with get'
                });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with update user'
                });
            }
        });
    }
    setAvatar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const image = req === null || req === void 0 ? void 0 : req.file;
                if (!image)
                    return res.status(400).json({
                        message: 'Ошибка установки аватара!',
                    });
                const user = yield UserService_1.default.getById(req.userId);
                const result = yield cloudinary_1.default.uploader.upload(image.path, {
                    folder: `project/user.avatar.${req.userId}`
                });
                user.cloudinaryAvatarId = result.public_id;
                user.cloudinaryAvatarUrl = result.secure_url;
                const updatedUser = yield UserService_1.default.update(user);
                yield PostService_1.default.updateManyAvatarByUserId(req.userId, updatedUser.cloudinaryAvatarUrl);
                yield CommentService_1.default.updateManyAvatarByUserId(req.userId, updatedUser.cloudinaryAvatarUrl);
                return res.status(200).json({
                    message: 'Аватар успешно установлен',
                    user: updatedUser
                });
            }
            catch (error) {
                return res.status(500).json({
                    message: 'Error with set avatar'
                });
            }
        });
    }
    deleteAvatar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserService_1.default.getById(req.userId);
                if (!(user === null || user === void 0 ? void 0 : user.cloudinaryAvatarId))
                    return res.status(400).json({
                        message: "You dont have avatar"
                    });
                yield cloudinary_1.default.uploader.destroy(user.cloudinaryAvatarId);
                yield cloudinary_1.default.api.delete_folder(`project/user.avatar.${user._id}`);
                user.cloudinaryAvatarId = null;
                user.cloudinaryAvatarUrl = null;
                yield PostService_1.default.updateManyAvatarByUserId(req.userId, null);
                yield CommentService_1.default.updateManyAvatarByUserId(req.userId, null);
                const updatedUser = yield UserService_1.default.update(user);
                return res.status(200).json({
                    message: 'Аватар успешно удален',
                    user: updatedUser
                });
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with delete user'
                });
            }
        });
    }
}
exports.UserController = UserController;
exports.default = new UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvVXNlckNvbnRvbGxlci9Vc2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2RUFBcUQ7QUFLckQsNkVBQXFEO0FBQ3JELG1GQUEyRDtBQUUzRCx3RUFBZ0Q7QUFFaEQsTUFBYSxjQUFjO0lBQTNCO1FBQ0csaUJBQVksR0FBVyxjQUFjLENBQUE7UUFDckMsb0JBQWUsR0FBVyxjQUFjLENBQUE7UUFHeEMsZUFBVSxHQUFXLE9BQU8sQ0FBQTtRQUM1QixrQkFBYSxHQUFXLE9BQU8sQ0FBQTtRQUMvQixrQkFBYSxHQUFXLE9BQU8sQ0FBQTtRQUMvQixrQkFBYSxHQUFXLE9BQU8sQ0FBQTtJQXFHbEMsQ0FBQztJQW5HUSxPQUFPLENBQUMsR0FBZ0IsRUFBRSxHQUFhOztZQUMxQyxJQUFJO2dCQUNELE1BQU0sSUFBSSxHQUFHLE1BQU0scUJBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUVuRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ25DO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDekIsT0FBTyxFQUFFLGdCQUFnQjtpQkFDM0IsQ0FBQyxDQUFBO2FBQ0o7UUFDSixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBZ0IsRUFBRSxHQUFhOztZQUM3QyxJQUFJO2FBRUg7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN6QixPQUFPLEVB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