"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = __importDefault(require("cloudinary"));
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});
exports.default = cloudinary_1.default.v2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jbG91ZGluYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNERBQW1DO0FBRW5DLG9CQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNuQixVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO0lBQ2xDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWE7SUFDbEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCO0NBQ3pDLENBQUMsQ0FBQztBQUVILGtCQUFlLG9CQUFVLENBQUMsRUFBRSxDQUFDIn0=