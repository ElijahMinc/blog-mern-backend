"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyJWTToken_1 = require("../utils/verifyJWTToken");
exports.default = (req, res, next) => {
    const jwtBearerToken = req.header('Authorization') || '';
    if (!jwtBearerToken)
        return res.status(400).json({
            message: 'Ошибка авторизации! Нет токена!'
        });
    const token = jwtBearerToken.split(' ')[1];
    try {
        const verifyToken = (0, verifyJWTToken_1.verifyJWTToken)(token);
        if (typeof verifyToken !== 'string') {
            req.userId = verifyToken._id;
        }
    }
    catch (error) {
        return res.status(400).json({
            message: 'Ошибка авторизации!'
        });
    }
    next();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2F1dGgubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDREQUF5RDtBQUV6RCxrQkFBZSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ2hFLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3hELElBQUcsQ0FBQyxjQUFjO1FBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3QyxPQUFPLEVBQUUsaUNBQWlDO1NBQzVDLENBQUMsQ0FBQTtJQUVGLE1BQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFMUMsSUFBSTtRQUNELE1BQU0sV0FBVyxHQUFHLElBQUEsK0JBQWMsRUFBQyxLQUFLLENBQUMsQ0FBQTtRQUV6QyxJQUFHLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBQztZQUMvQixHQUFtQixDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFBO1NBQy9DO0tBQ0g7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNiLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekIsT0FBTyxFQUFFLHFCQUFxQjtTQUNoQyxDQUFDLENBQUE7S0FDSjtJQUdELElBQUksRUFBRSxDQUFBO0FBQ1QsQ0FBQyxDQUFBIn0=