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
const Post_1 = __importDefault(require("../modules/Post/Post"));
const shuffle_1 = require("../utils/shuffle");
class PostService {
    constructor() {
        this.popularPosts = 1;
        this.pageOptions = {
            page: 0,
            limit: 3,
            sort: 'desc',
            searchValue: ''
        };
    }
    getAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = query ? +query.page : this.pageOptions.page;
            const queryParams = {};
            if (!!(query === null || query === void 0 ? void 0 : query.searchValue)) {
                queryParams.$text = { $search: query.searchValue, $diacriticSensitive: true };
            }
            if (!!(query === null || query === void 0 ? void 0 : query.tags)) {
                queryParams.tags = { $in: typeof query.tags === 'string' ? [query.tags] : query.tags };
            }
            const posts = yield Post_1.default.find(queryParams)
                .sort({ updatedAt: this.pageOptions.sort })
                .skip(page * this.pageOptions.limit)
                .limit(this.pageOptions.limit);
            const countPosts = yield Post_1.default.find(queryParams)
                .count();
            return { total: countPosts, posts };
        });
    }
    getPopular(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = query ? +query.page : this.pageOptions.page;
            const queryParams = {};
            if (!!(query === null || query === void 0 ? void 0 : query.searchValue)) {
                queryParams.$text = { $search: query.searchValue, $diacriticSensitive: true };
            }
            const posts = yield Post_1.default.find(Object.assign(Object.assign({}, queryParams), { 'likes.likes': { $gte: this.popularPosts } }))
                .sort({ updatedAt: this.pageOptions.sort })
                .skip(page * this.pageOptions.limit)
                .limit(this.pageOptions.limit);
            const countPosts = yield Post_1.default.find(Object.assign(Object.assign({}, queryParams), { 'likes.likes': { $gte: this.popularPosts } }))
                .count();
            return { total: countPosts, posts };
        });
    }
    getTagsByPopular() {
        return __awaiter(this, void 0, void 0, function* () {
            const offset = 5;
            const posts = yield Post_1.default.find({ 'likes.likes': { $gte: this.popularPosts } });
            const tags = (0, shuffle_1.shuffle)(posts.map(post => post.tags).flat()).slice(0, offset);
            return tags;
        });
    }
    getById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield Post_1.default.findById(_id);
            if (!post)
                throw new Error("Такого поста нет");
            return post;
        });
    }
    getByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const postsByUserId = yield Post_1.default.find({ userId: { $all: userId } });
            if (!postsByUserId)
                throw new Error("Таких постов нет");
            return postsByUserId;
        });
    }
    // userInfo: PostInterface['userInfo']
    updateManyAvatarByUserId(userId, cloudinaryAvatarUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            // const postsByUserId = await Post.updateMany({ userId: {$all: userId } }, {$set: { userInfo }} )
            const postsByUserId = yield Post_1.default.updateMany({ userId: { $all: userId } }, { $set: { 'userInfo.cloudinaryAvatarUrl': cloudinaryAvatarUrl } });
            if (!postsByUserId)
                throw new Error("Таких постов нет");
            return postsByUserId;
        });
    }
    filterByTags(_id, tags) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield Post_1.default.find({ tags: { $all: tags } });
            if (!post)
                return [];
            return post;
        });
    }
    createSync(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Post_1.default(post);
        });
    }
    savePost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post.save();
        });
    }
    update(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Post_1.default.findByIdAndUpdate(post._id, post, { returnOriginal: false });
        });
    }
    delete(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Post_1.default.findByIdAndDelete(post);
        });
    }
}
// .find({tags: { $all:["home"] }})
exports.default = new PostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvUG9zdFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBd0M7QUFLeEMsOENBQTJDO0FBRTNDLE1BQU0sV0FBVztJQUFqQjtRQUNHLGlCQUFZLEdBQVksQ0FBQyxDQUFBO1FBRXpCLGdCQUFXLEdBQStFO1lBQ3ZGLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLFdBQVcsRUFBRSxFQUFFO1NBQ2pCLENBQUE7SUE4RkosQ0FBQztJQTVGUSxNQUFNLENBQUMsS0FBc0U7O1lBQ2hGLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtZQUV4RCxNQUFNLFdBQVcsR0FBb0IsRUFBcUIsQ0FBQTtZQUUxRCxJQUFHLENBQUMsQ0FBQyxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxXQUFXLENBQUEsRUFBRTtnQkFDdEIsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxDQUFBO2FBQzlFO1lBRUQsSUFBRyxDQUFDLENBQUMsQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsSUFBSSxDQUFBLEVBQUU7Z0JBQ2hCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUN2RjtZQUVGLE1BQU0s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