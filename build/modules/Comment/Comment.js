"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Comment = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    userInfo: {
        type: {}
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Comment', Comment);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL0NvbW1lbnQvQ29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFtRDtBQUduRCxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFNLENBQW1CO0lBQzNDLE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQzNCLEdBQUcsRUFBRSxNQUFNO1FBQ1gsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUMzQixHQUFHLEVBQUUsTUFBTTtRQUNYLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxFQUVMO0tBQ0Y7Q0FFRixFQUFFO0lBQ0EsVUFBVSxFQUFFLElBQUk7Q0FDbEIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsSUFBQSxnQkFBSyxFQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyJ9