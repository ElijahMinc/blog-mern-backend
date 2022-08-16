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
exports.CommentController = void 0;
const PostService_1 = __importDefault(require("../../services/PostService"));
const UserService_1 = __importDefault(require("../../services/UserService"));
const CommentService_1 = __importDefault(require("../../services/CommentService"));
class CommentController {
    constructor() {
        this.getAllCommentByPostIdUrl = '/comment/:postId';
        this.getAllCommentUrl = '/comment';
        this.createCommentUrl = '/comment';
    }
    getAll(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comments = yield CommentService_1.default.getAll();
                return res.status(200).json(comments);
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with get'
                });
            }
        });
    }
    getByPostId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { postId } = req.params;
                const comments = yield CommentService_1.default.getByPostId(postId);
                return res.status(200).json(comments);
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with get'
                });
            }
        });
    }
    createComment(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { postId, userId, text } = req.body;
                const post = yield PostService_1.default.getById(postId);
                const user = yield UserService_1.default.getById(userId);
                const comment = {
                    postId: post._id,
                    userId: user._id,
                    userInfo: {
                        firstname: user.firstname,
                        lastname: user.lastname,
                        cloudinaryAvatarUrl: (_a = user === null || user === void 0 ? void 0 : user.cloudinaryAvatarUrl) !== null && _a !== void 0 ? _a : null
                    },
                    text
                };
                const newComment = yield CommentService_1.default.create(comment);
                return res.status(200).json(newComment);
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with get'
                });
            }
        });
    }
}
exports.CommentController = CommentController;
exports.default = new CommentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQ29tbWVudENvbnRyb2xsZXIvQ29tbWVudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkVBQXFEO0FBRXJELDZFQUFxRDtBQUlyRCxtRkFBMkQ7QUFFM0QsTUFBYSxpQkFBaUI7SUFBOUI7UUFDRyw2QkFBd0IsR0FBVyxrQkFBa0IsQ0FBQTtRQUVyRCxxQkFBZ0IsR0FBVyxVQUFVLENBQUE7UUFDckMscUJBQWdCLEdBQVcsVUFBVSxDQUFBO0lBMkR4QyxDQUFDO0lBeERRLE1BQU0sQ0FBQyxDQUFjLEVBQUUsR0FBYTs7WUFDdkMsSUFBSTtnQkFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLHdCQUFjLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBRTlDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDdkM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN6QixPQUFPLEVBQUUsZ0JBQWdCO2lCQUMzQixDQUFDLENBQUE7YUFDSjtRQUNKLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFnQixFQUFFLEdBQWE7O1lBQzlDLElBQUk7Z0JBQ0QsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUE0QixDQUFBO2dCQUNuRCxNQUFNLFFBQVEsR0FBRyxNQUFNLHdCQUFjLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUV6RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ3ZDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDekIsT0FBTyxFQUFFLGdCQUFnQjtpQkFDM0IsQ0FBQyxDQUFBO2FBQ0o7UUFDSixDQUFDO0tBQUE7SUFHSyxhQUFhLENBQUMsR0FBZ0IsRUFBRSxHQUFhOzs7WUFDaEQsSUFBSTtnQkFDRCxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBMkIsQ0FBQTtnQkFFaEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDOUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFFOUMsTUFBTSxPQUFPLEdBQXFCO29CQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUc7b0JBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDaEIsUUFBUSxFQUFFO3dCQUNQLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzt3QkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO3dCQUN2QixtQkFBbUIsRUFBRSxNQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxtQkFBbUIsbUNBQUksSUFBSTtxQkFDeEQ7b0JBQ0QsSUFBSTtpQkFDTixDQUFBO2dCQUVELE1BQU0sVUFBVSxHQUFHLE1BQU0sd0JBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBRXZELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7YUFFekM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFFVCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN6QixPQUFPLEVBQUUsZ0JBQWdCO2lCQUMzQixDQUFDLENBQUE7YUFDSjs7S0FDSDtDQUVIO0FBL0RELDhDQStEQztBQUVELGtCQUFlLElBQUksaUJBQWlCLENBQUEifQ==