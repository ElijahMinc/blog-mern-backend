"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Post = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        default: ''
    },
    text: {
        type: String,
        required: true,
        default: ''
    },
    tags: [{
            type: String,
        }],
    likes: {
        type: {
            userIds: [{
                    type: mongoose_1.Schema.Types.ObjectId,
                    ref: 'User'
                }],
            likes: Number
        },
        default: {
            userIds: [],
            isLikedStatus: false,
            likes: 0
        }
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userInfo: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        cloudinaryAvatarUrl: {
            type: String,
            default: null
        }
    },
    cloudinaryUrl: {
        type: String,
        default: null
    },
    cloudinaryId: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});
Post.index({ title: 'text' }, { default_language: 'none' });
exports.default = (0, mongoose_1.model)('Post', Post);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL1Bvc3QvUG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFtRDtBQUduRCxNQUFNLElBQUksR0FBRyxJQUFJLGlCQUFNLENBQWdCO0lBQ3BDLEtBQUssRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxPQUFPLEVBQUUsRUFBRTtLQUNiO0lBQ0QsSUFBSSxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRSxFQUFFO0tBQ2I7SUFDRCxJQUFJLEVBQUUsQ0FBQztZQUNKLElBQUksRUFBRSxNQUFNO1NBQ2QsQ0FBQztJQUNGLEtBQUssRUFBRTtRQUNKLElBQUksRUFBRTtZQUNILE9BQU8sRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO29CQUMzQixHQUFHLEVBQUUsTUFBTTtpQkFDYixDQUFDO1lBQ0YsS0FBSyxFQUFFLE1BQU07U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNOLE9BQU8sRUFBRSxFQUFFO1lBQ1gsYUFBYSxFQUFFLEtBQUs7WUFDcEIsS0FBSyxFQUFFLENBQUM7U0FDVjtLQUNIO0lBQ0QsTUFBTSxFQUFFO1FBQ0wsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDM0IsR0FBRyxFQUFFLE1BQU07UUFDWCxRQUFRLEVBQUUsSUFBSTtLQUNoQjtJQUNELFFBQVEsRUFBRTtRQUNQLFNBQVMsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDaEI7UUFDRCxRQUFRLEVBQUU7WUFDUCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbEIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsSUFBSTtTQUNmO0tBQ0g7SUFDRCxhQUFhLEVBQUU7UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO0tBQ2Y7SUFDRCxZQUFZLEVBQUU7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO0tBQ2Y7Q0FFSCxFQUFFO0lBQ0EsVUFBVSxFQUFFLElBQUk7Q0FDbEIsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7QUFFekQsa0JBQWUsSUFBQSxnQkFBSyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyJ9