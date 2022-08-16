"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidator = void 0;
const express_validator_1 = require("express-validator");
exports.authValidator = [
    (0, express_validator_1.body)('firstname').isLength({ min: 3 }),
    (0, express_validator_1.body)('lastname').isLength({ min: 3 }),
    (0, express_validator_1.body)('email').isEmail(),
    (0, express_validator_1.body)('password').isLength({ min: 3 })
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL0F1dGhDb250cm9sbGVyL1ZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBeUM7QUFHNUIsUUFBQSxhQUFhLEdBQUc7SUFDMUIsSUFBQSx3QkFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QyxJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3JDLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN2QyxDQUFBIn0=