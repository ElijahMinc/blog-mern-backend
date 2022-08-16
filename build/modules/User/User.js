"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    cloudinaryAvatarUrl: {
        type: String,
        default: null
    },
    cloudinaryAvatarId: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('User', User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL1VzZXIvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFtRDtBQUduRCxNQUFNLElBQUksR0FBRyxJQUFJLGlCQUFNLENBQWdCO0lBQ3BDLFNBQVMsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDaEI7SUFDRCxRQUFRLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2hCO0lBQ0QsS0FBSyxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxRQUFRLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2hCO0lBQ0QsbUJBQW1CLEVBQUU7UUFDbEIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsSUFBSTtLQUNmO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDakIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsSUFBSTtLQUNmO0NBQ0gsRUFBRTtJQUNBLFVBQVUsRUFBRSxJQUFJO0NBQ2xCLENBQUMsQ0FBQTtBQUVGLGtCQUFlLElBQUEsZ0JBQUssRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMifQ==