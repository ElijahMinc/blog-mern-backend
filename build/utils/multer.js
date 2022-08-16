"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
// Multer config
exports.default = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        filename: function (req, file, cb) {
            const uniqueSuffix = (0, uuid_1.v4)();
            cb(null, file.fieldname + '-' + uniqueSuffix);
        }
    }),
    fileFilter: (req, file, cb) => {
        const ext = path_1.default.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("File type is not supported"));
            return;
        }
        cb(null, true);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL211bHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUEyQjtBQUMzQixnREFBdUI7QUFDdkIsK0JBQWtDO0FBRWxDLGdCQUFnQjtBQUNoQixrQkFBZSxJQUFBLGdCQUFNLEVBQUM7SUFDcEIsT0FBTyxFQUFFLGdCQUFNLENBQUMsV0FBVyxDQUFDO1FBQzFCLFFBQVEsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUMvQixNQUFNLFlBQVksR0FBRyxJQUFBLFNBQU0sR0FBRSxDQUFBO1lBQzdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUE7UUFDL0MsQ0FBQztLQUNGLENBQUM7SUFDRixVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBRTVCLE1BQU0sR0FBRyxHQUFHLGNBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssT0FBTyxJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7WUFDdkQsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1I7UUFFRCxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Q0FFRixDQUFDLENBQUMifQ==