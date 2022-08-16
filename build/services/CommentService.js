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
exports.CommentService = void 0;
const Comment_1 = __importDefault(require("../modules/Comment/Comment"));
class CommentService {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield Comment_1.default.findById(id);
            if (!comment)
                throw new Error("Такого комментария нет");
            return comment;
        });
    }
    getByPostId(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentsByPostId = yield Comment_1.default.find({ postId: { $all: postId } });
            if (!commentsByPostId)
                throw new Error("Комментарий к посту нет");
            return commentsByPostId;
        });
    }
    //userInfo: CommentInterface['userInfo']
    updateManyAvatarByUserId(userId, avatar) {
        return __awaiter(this, void 0, void 0, function* () {
            // const commentsByUserId = await Comment.updateMany({ userId: {$all: userId } }, {$set: { userInfo }})
            const commentsByUserId = yield Comment_1.default.updateMany({ userId: { $all: userId } }, { $set: { "userInfo.avatar": avatar } });
            if (!commentsByUserId)
                throw new Error("Таких постов нет");
            return commentsByUserId;
        });
    }
    removeAllCommentsByIdPost(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentsByUserId = yield Comment_1.default.deleteMany({ postId: { $all: postId } });
            if (!commentsByUserId)
                throw new Error("Failed with delete Comments");
            return commentsByUserId;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield Comment_1.default.find();
            return comments;
        });
    }
    create(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Comment_1.default.create(comment);
        });
    }
}
exports.CommentService = CommentService;
exports.default = new CommentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvQ29tbWVudFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBR0EseUVBQWlEO0FBSWpELE1BQWEsY0FBYztJQUVsQixPQUFPLENBQUMsRUFBZ0Q7O1lBQzNELE1BQU0sT0FBTyxHQUFHLE1BQU0saUJBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDMUMsSUFBRyxDQUFDLE9BQU87Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1lBQ3RELE9BQU8sT0FBTyxDQUFBO1FBQ2pCLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxNQUFvRDs7WUFDbkUsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLGlCQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUV4RSxJQUFHLENBQUMsZ0JBQWdCO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTtZQUNoRSxPQUFPLGdCQUFnQixDQUFBO1FBQzFCLENBQUM7S0FBQTtJQUNELHdDQUF3QztJQUNsQyx3QkFBd0IsQ0FBQyxNQUEyQyxFQUFFLE1BQWlDOztZQUUxRyx1R0FBdUc7WUFDdkcsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBQyxJQUFJLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsRUFBQyxDQUFDLENBQUE7WUFFckgsSUFBRyxDQUFDLGdCQUFnQjtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDekQsT0FBTyxnQkFBZ0IsQ0FBQTtRQUMxQixDQUFDO0tBQUE7SUFHSyx5QkFBeUIsQ0FBQyxNQUE0Qzs7WUFDekUsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUU5RSxJQUFHLENBQUMsZ0JBQWdCO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtZQUNwRSxPQUFPLGdCQUFnQixDQUFBO1FBQzFCLENBQUM7S0FBQTtJQUVLLE1BQU07O1lBQ1QsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3JDLE9BQU8sUUFBUSxDQUFBO1FBQ2xCLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxPQUF5Qjs7WUFDbkMsT0FBTyxNQUFNLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7S0FBQTtDQUNIO0FBeENELHdDQXdDQztBQUdELGtCQUFlLElBQUksY0FBYyxDQUFBIn0=