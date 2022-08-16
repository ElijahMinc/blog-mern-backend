"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CommentController_1 = __importDefault(require("../controllers/CommentController/CommentController"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const cors_middleware_1 = __importDefault(require("../middlewares/cors.middleware"));
const multer_1 = __importDefault(require("../utils/multer"));
const commentRouter = (0, express_1.Router)();
commentRouter.get(CommentController_1.default.getAllCommentUrl, auth_middleware_1.default, cors_middleware_1.default, CommentController_1.default.getAll);
commentRouter.get(CommentController_1.default.getAllCommentByPostIdUrl, auth_middleware_1.default, cors_middleware_1.default, CommentController_1.default.getByPostId);
commentRouter.post(CommentController_1.default.createCommentUrl, auth_middleware_1.default, cors_middleware_1.default, multer_1.default.none(), CommentController_1.default.createComment);
exports.default = commentRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMucm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9jb21tZW50cy5yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBb0Q7QUFDcEQsMkdBQW1GO0FBRW5GLHFGQUE0RDtBQUM1RCxxRkFBNEQ7QUFDNUQsNkRBQXFDO0FBRXJDLE1BQU0sYUFBYSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFBO0FBRzlCLGFBQWEsQ0FBQyxHQUFHLENBQUMsMkJBQWlCLENBQUMsZ0JBQWdCLEVBQUUseUJBQWMsRUFBRSx5QkFBYyxFQUFFLDJCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQy9HLGFBQWEsQ0FBQyxHQUFHLENBQUMsMkJBQWlCLENBQUMsd0JBQXdCLEVBQUUseUJBQWMsRUFBRSx5QkFBYyxFQUFFLDJCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRTVILGFBQWEsQ0FBQyxJQUFJLENBQUMsMkJBQWlCLENBQUMsZ0JBQWdCLEVBQUMseUJBQWMsRUFBRSx5QkFBYyxFQUFFLGdCQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsMkJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUE7QUFLckksa0JBQWUsYUFBYSxDQUFBIn0=