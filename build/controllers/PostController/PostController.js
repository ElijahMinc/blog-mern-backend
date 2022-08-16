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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const PostService_1 = __importDefault(require("../../services/PostService"));
const UserService_1 = __importDefault(require("../../services/UserService"));
const mongoose_1 = __importDefault(require("mongoose"));
const CommentService_1 = __importDefault(require("../../services/CommentService"));
const cloudinary_1 = __importDefault(require("../../utils/cloudinary"));
const ErrorService_1 = require("../../services/ErrorService");
class PostController {
    constructor() {
        this.getOnePostUrl = '/post/:id';
        this.updateLikeUrlPost = '/post/like/:id';
        this.getPopularPostsUrl = '/post-popular';
        this.getTagsByPopularPostsUrl = '/post-popular-tags';
        this.getAllPostUrl = '/post';
        this.createPostUrl = '/post';
        this.updatePostUrl = '/post';
        this.deletePostUrl = '/post/:id';
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = req.query;
                const posts = yield PostService_1.default.getAll(query);
                return res.status(200).json(posts);
            }
            catch (e) {
                next(e);
            }
        });
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id: _id } = req.params;
                const post = yield PostService_1.default.getById(_id);
                if (Array.isArray(post))
                    return res.status(200).json(post);
                return res.status(200).json({ posts: [post] });
            }
            catch (e) {
                next(e);
            }
        });
    }
    getPopular(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = req.query;
                const posts = yield PostService_1.default.getPopular(query);
                return res.status(200).json(posts);
            }
            catch (e) {
                next(e);
            }
        });
    }
    getTagsByPopularPost(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tags = yield PostService_1.default.getTagsByPopular();
                return res.status(200).json(tags);
            }
            catch (e) {
                next(e);
            }
        });
    }
    likePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id: _id } = req.params;
                const post = yield PostService_1.default.getById(_id);
                const isLikedPostOfUserStatus = post.likes.userIds.some(_id => {
                    if (_id instanceof mongoose_1.default.Types.ObjectId) {
                        const castToObjectId = new mongoose_1.default.Types.ObjectId(req.userId);
                        return _id.equals(castToObjectId);
                    }
                });
                // Если найденные айди совпадают, значит юзер лайкнул пост
                if (isLikedPostOfUserStatus) {
                    post.likes.userIds = post.likes.userIds.filter((userId) => {
                        if (userId instanceof mongoose_1.default.Types.ObjectId) {
                            const castToObjectId = new mongoose_1.default.Types.ObjectId(req.userId);
                            return !userId.equals(castToObjectId);
                        }
                    });
                    post.likes.likes = --post.likes.likes;
                }
                else {
                    post.likes.userIds.push(req.userId);
                    post.likes.likes = ++post.likes.likes;
                }
                const updatedPost = yield PostService_1.default.savePost(post);
                if (Array.isArray(post))
                    return res.status(200).json(updatedPost);
                return res.status(200).json([post]);
            }
            catch (e) {
                next(e);
            }
        });
    }
    createPost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = req.body, { text, title } = _a, rest = __rest(_a, ["text", "title"]);
                const tagNames = rest.tags;
                const image = req === null || req === void 0 ? void 0 : req.file;
                const user = yield UserService_1.default.getById(req.userId);
                if (image && image.size >= 524288) {
                    next(ErrorService_1.ApiError.BadRequest('File is very big!'));
                }
                const post = {
                    text,
                    title,
                    userInfo: {
                        firstname: user.firstname,
                        lastname: user.lastname,
                        cloudinaryAvatarUrl: (user === null || user === void 0 ? void 0 : user.cloudinaryAvatarUrl) || null
                    },
                    likes: {
                        userIds: [],
                        likes: 0
                    },
                    userId: req.userId,
                    cloudinaryUrl: null,
                    cloudinaryId: null,
                    tags: []
                };
                if (tagNames)
                    post.tags = tagNames;
                const newPost = yield PostService_1.default.createSync(post);
                if (!!image) {
                    // const generateUniqueName = 
                    const result = yield cloudinary_1.default.uploader.upload(image.path, {
                        folder: `project/${newPost._id}`
                    });
                    newPost.cloudinaryId = result.public_id;
                    newPost.cloudinaryUrl = result.secure_url;
                }
                yield PostService_1.default.savePost(newPost);
                return res.status(200).json(newPost);
            }
            catch (e) {
                next(e);
            }
        });
    }
    updatePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tags, text, title, _id } = req.body;
                const image = req === null || req === void 0 ? void 0 : req.file;
                if (image && image.size >= 524288) {
                    next(ErrorService_1.ApiError.BadRequest('File is very big!'));
                }
                const post = yield PostService_1.default.getById(_id);
                if (title)
                    post.title = title;
                if (text)
                    post.text = text;
                if (!!tags)
                    post.tags = tags;
                if (!!image) {
                    if (post.cloudinaryId) { // if image was load
                        yield cloudinary_1.default.uploader.destroy(post.cloudinaryId);
                    }
                    const result = yield cloudinary_1.default.uploader.upload(image.path, {
                        folder: `project/${post._id}`
                    });
                    post.cloudinaryId = result.public_id;
                    post.cloudinaryUrl = result.secure_url;
                }
                const updatedPost = yield PostService_1.default.update(post);
                return res.status(200).json(updatedPost);
            }
            catch (e) {
                next(e);
            }
        });
    }
    deletePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = req.query;
                const { id } = req.params;
                const post = yield PostService_1.default.getById(id);
                if (!!post.cloudinaryId) {
                    yield cloudinary_1.default.uploader.destroy(post.cloudinaryId);
                    yield cloudinary_1.default.api.delete_folder(`project/${post._id}`);
                }
                yield PostService_1.default.delete(post);
                yield CommentService_1.default.removeAllCommentsByIdPost(post._id);
                const { total, posts } = yield PostService_1.default.getAll(query);
                return res.status(200).json({
                    message: 'Пост был успешно удален',
                    posts,
                    total
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.PostController = PostController;
exports.default = new PostController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvUG9zdENvbnRyb2xsZXIvUG9zdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2RUFBcUQ7QUFFckQsNkVBQXFEO0FBQ3JELHdEQUFnRTtBQUVoRSxtRkFBMkQ7QUFDM0Qsd0VBQStDO0FBQy9DLDhEQUF1RDtBQUd2RCxNQUFhLGNBQWM7SUFBM0I7UUFFRyxrQkFBYSxHQUFXLFdBQVcsQ0FBQTtRQUVuQyxzQkFBaUIsR0FBVyxnQkFBZ0IsQ0FBQTtRQUM1Qyx1QkFBa0IsR0FBVyxlQUFlLENBQUE7UUFDNUMsNkJBQXdCLEdBQVcsb0JBQW9CLENBQUE7UUFFdkQsa0JBQWEsR0FBVyxPQUFPLENBQUE7UUFDL0Isa0JBQWEsR0FBVyxPQUFPLENBQUE7UUFDL0Isa0JBQWEsR0FBVyxPQUFPLENBQUE7UUFDL0Isa0JBQWEsR0FBVyxXQUFXLENBQUE7SUF5TnRDLENBQUM7SUF2TlEsTUFBTSxDQUFDLEdBQWdCLEVBQUUsR0FBYSxFQUFFLElBQWtCOztZQUM3RCxJQUFJO2dCQUNELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUE2QyxDQUFBO2dCQUMvRCxNQUFNLEtBQUssR0FBRyxNQUFNLHFCQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUU3QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3BDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ1Q7UUFDSixDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsR0FBZ0IsRUFBRSxHQUFhLEVBQUUsSUFBa0I7O1lBQzdELElBQUk7Z0JBQ0QsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO2dCQUU5QixNQUFNLElBQUksR0FBRyxNQUFNLHFCQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMzQyxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBRXpELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7YUFDaEQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDVDtRQUNKLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFnQixFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFDakUsSUFBSTtnQkFDRCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBeUIsQ0FBQTtnQkFFM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxxQkFBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFFakQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNwQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNULElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNUO1FBQ0osQ0FBQztLQUFBO0lBRUssb0JBQW9CLENBQUMsQ0FBYyxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFDekUsSUFBSTtnQkFDRCxNQUFNLElBQUksR0FBRyxNQUFNLHFCQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtnQkFFakQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNuQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNULElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNUO1FBQ0osQ0FBQztLQUFBO0lBR0ssUUFBUSxDQUFDLEdBQWdCLEVBQUUsR0FBYSxFQUFFLElBQWtCOztZQUMvRCxJQUFJO2dCQUVELE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtnQkFDOUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFFM0MsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzNELElBQUcsR0FBRyxZQUFZLGtCQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQzt3QkFDdkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxrQkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU8sQ0FBQyxDQUFBO3dCQUVoRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7cUJBQ2xDO2dCQUNKLENBQUMsQ0FBQyxDQUFBO2dCQUNGLDBEQUEwRDtnQkFJMUQsSUFBRyx1QkFBdUIsRUFBQztvQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7d0JBQ3ZELElBQUcsTUFBTSxZQUFZLGtCQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQzs0QkFDMUMsTUFBTSxjQUFjLEdBQUcsSUFBSSxrQkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU8sQ0FBQyxDQUFBOzRCQUVoRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTt5QkFDdEM7b0JBQ0osQ0FBQyxDQUFDLENBQUE7b0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtpQkFFdkM7cUJBQUs7b0JBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFPLENBQUMsQ0FBQTtvQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtpQkFFdkM7Z0JBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFHcEQsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUVoRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTthQUNyQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNULElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNUO1FBQ0osQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQWdCLEVBQUUsR0FBYSxFQUFFLElBQWtCOztZQUVqRSxJQUFJO2dCQUNELE1BQU0sS0FBMkIsR0FBRyxDQUFDLElBQXVCLEVBQXRELEVBQUUsSUFBSSxFQUFFLEtBQUssT0FBeUMsRUFBcEMsSUFBSSxjQUF0QixpQkFBd0IsQ0FBOEIsQ0FBQTtnQkFDNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQWdCLENBQUE7Z0JBQ3RDLE1BQU0sS0FBSyxHQUFHLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJLENBQUE7Z0JBRXZCLE1BQU0sSUFBSSxHQUFHLE1BQU0scUJBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBb0MsQ0FBQTtnQkFFckYsSUFBRyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUM7b0JBQzlCLElBQUksQ0FBQyx1QkFBUSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7aUJBQ2hEO2dCQUVELE1BQU0sSUFBSSxHQUFrQjtvQkFDekIsSUFBSTtvQkFDSixLQUFLO29CQUNMLFFBQVEsRUFBRTt3QkFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7d0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTt3QkFDdkIsbUJBQW1CLEVBQUUsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsbUJBQW1CLEtBQUksSUFBSTtxQkFDeEQ7b0JBQ0QsS0FBSyxFQUFFO3dCQUNKLE9BQU8sRUFBRSxFQUFFO3dCQUNYLEtBQUssRUFBRSxDQUFDO3FCQUNWO29CQUNELE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTztvQkFDbkIsYUFBYSxFQUFFLElBQUk7b0JBQ25CLFlBQVksRUFBRSxJQUFJO29CQUNsQixJQUFJLEVBQUUsRUFBRTtpQkFDVixDQUFBO2dCQUVELElBQUcsUUFBUTtvQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQTtnQkFJakMsTUFBTSxPQUFPLEdBQUcsTUFBTSxxQkFBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFFbEQsSUFBRyxDQUFDLENBQUMsS0FBSyxFQUFDO29CQUNSLDhCQUE4QjtvQkFDOUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTt3QkFDekQsTUFBTSxFQUFFLFdBQVcsT0FBTyxDQUFDLEdBQUcsRUFBRTtxQkFDbEMsQ0FBQyxDQUFDO29CQUVILE9BQU8sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQTtvQkFDdkMsT0FBTyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFBO2lCQUMzQztnQkFHRCxNQUFNLHFCQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUVuQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRXRDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ1Q7UUFDSixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBZ0IsRUFBRSxHQUFhLEVBQUUsSUFBa0I7O1lBQ2pFLElBQUk7Z0JBQ0QsTUFBTSxFQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUE2QixDQUFBO2dCQUVyRSxNQUFNLEtBQUssR0FBRyxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsSUFBSSxDQUFBO2dCQUV2QixJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBQztvQkFDOUIsSUFBSSxDQUFDLHVCQUFRLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtpQkFDaEQ7Z0JBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFFM0MsSUFBRyxLQUFLO29CQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO2dCQUM1QixJQUFHLElBQUk7b0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7Z0JBQ3pCLElBQUcsQ0FBQyxDQUFDLElBQUk7b0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7Z0JBRzNCLElBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFFVCxJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUMsRUFBRSxvQkFBb0I7d0JBQ3hDLE1BQU0sb0JBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDdkQ7b0JBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTt3QkFDekQsTUFBTSxFQUFFLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRTtxQkFDL0IsQ0FBQyxDQUFDO29CQUVILElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQTtvQkFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFBO2lCQUN4QztnQkFFRixNQUFNLFdBQVcsR0FBRyxNQUFNLHFCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUVqRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzFDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ1Q7UUFDSixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBZ0IsRUFBRSxHQUFhLEVBQUUsSUFBa0I7O1lBQ2pFLElBQUk7Z0JBQ0QsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQXVCLENBQUE7Z0JBQ3pDLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO2dCQUV6QixNQUFNLElBQUksR0FBRyxNQUFNLHFCQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUUxQyxJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDO29CQUNwQixNQUFNLG9CQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRXJELE1BQU0sb0JBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQzVEO2dCQUVELE1BQU0scUJBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBRTlCLE1BQU0sd0JBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBRXhELE1BQU0sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLEdBQUcsTUFBTSxxQkFBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFFdEQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDekIsT0FBTyxFQUFFLHlCQUF5QjtvQkFDbEMsS0FBSztvQkFDTCxLQUFLO2lCQUNQLENBQUMsQ0FBQTthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ1Q7UUFDSixDQUFDO0tBQUE7Q0FDSDtBQXBPRCx3Q0FvT0M7QUFFRCxrQkFBZSxJQUFJLGNBQWMsQ0FBQSJ9