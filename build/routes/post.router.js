"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = __importDefault(require("../controllers/PostController/PostController"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const cors_middleware_1 = __importDefault(require("../middlewares/cors.middleware"));
const multer_1 = __importDefault(require("../utils/multer"));
const postRouter = (0, express_1.Router)();
postRouter.get(PostController_1.default.getOnePostUrl, auth_middleware_1.default, cors_middleware_1.default, PostController_1.default.getOne);
postRouter.get(PostController_1.default.getAllPostUrl, auth_middleware_1.default, cors_middleware_1.default, PostController_1.default.getAll);
postRouter.get(PostController_1.default.getPopularPostsUrl, auth_middleware_1.default, cors_middleware_1.default, PostController_1.default.getPopular);
postRouter.get(PostController_1.default.getTagsByPopularPostsUrl, auth_middleware_1.default, cors_middleware_1.default, PostController_1.default.getTagsByPopularPost);
postRouter.post(PostController_1.default.createPostUrl, auth_middleware_1.default, cors_middleware_1.default, multer_1.default.single('image'), PostController_1.default.createPost);
postRouter.put(PostController_1.default.updatePostUrl, auth_middleware_1.default, cors_middleware_1.default, multer_1.default.single('image'), PostController_1.default.updatePost);
postRouter.put(PostController_1.default.updateLikeUrlPost, auth_middleware_1.default, cors_middleware_1.default, PostController_1.default.likePost);
postRouter.delete(PostController_1.default.deletePostUrl, auth_middleware_1.default, cors_middleware_1.default, PostController_1.default.deletePost);
exports.default = postRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Bvc3Qucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQW9EO0FBQ3BELGtHQUEwRTtBQUMxRSxxRkFBNEQ7QUFDNUQscUZBQTREO0FBQzVELDZEQUFzQztBQUd0QyxNQUFNLFVBQVUsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQTtBQUUzQixVQUFVLENBQUMsR0FBRyxDQUFDLHdCQUFjLENBQUMsYUFBYSxFQUFFLHlCQUFjLEVBQUUseUJBQWMsRUFBRSx3QkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ25HLFVBQVUsQ0FBQyxHQUFHLENBQUMsd0JBQWMsQ0FBQyxhQUFhLEVBQUUseUJBQWMsRUFBRSx5QkFBYyxFQUFFLHdCQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbkcsVUFBVSxDQUFDLEdBQUcsQ0FBQyx3QkFBYyxDQUFDLGtCQUFrQixFQUFFLHlCQUFjLEVBQUUseUJBQWMsRUFBRSx3QkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQzVHLFVBQVUsQ0FBQyxHQUFHLENBQUMsd0JBQWMsQ0FBQyx3QkFBd0IsRUFBRSx5QkFBYyxFQUFFLHlCQUFjLEVBQUUsd0JBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRTVILFVBQVUsQ0FBQyxJQUFJLENBQUMsd0JBQWMsQ0FBQyxhQUFhLEVBQUMseUJBQWMsRUFBRSx5QkFBYyxFQUFFLGdCQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFHLHdCQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDaEksVUFBVSxDQUFDLEdBQUcsQ0FBQyx3QkFBYyxDQUFDLGFBQWEsRUFBQyx5QkFBYyxFQUFFLHlCQUFjLEVBQUUsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsd0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUM5SCxVQUFVLENBQUMsR0FBRyxDQUFDLHdCQUFjLENBQUMsaUJBQWlCLEVBQUMseUJBQWMsRUFBRSx5QkFBYyxFQUFFLHdCQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDeEcsVUFBVSxDQUFDLE1BQU0sQ0FBQyx3QkFBYyxDQUFDLGFBQWEsRUFBQyx5QkFBYyxFQUFFLHlCQUFjLEVBQUUsd0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUl6RyxrQkFBZSxVQUFVLENBQUEifQ==