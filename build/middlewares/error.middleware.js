"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorService_1 = require("../services/ErrorService");
function default_1(err, req, res, next) {
    var _a;
    if (err instanceof ErrorService_1.ApiError) {
        return res.status(err.status).json({
            message: err.message,
            errors: (_a = err === null || err === void 0 ? void 0 : err.errors) !== null && _a !== void 0 ? _a : []
        });
    }
    return res.status(500).json({
        message: 'An unexpected server error occurred'
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9lcnJvci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQW1EO0FBSW5ELG1CQUF5QixHQUFxQixFQUFHLEdBQVksRUFBRyxHQUFhLEVBQUcsSUFBSTs7SUFDakYsSUFBRyxHQUFHLFlBQVksdUJBQVEsRUFBQztRQUN4QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsTUFBTSxFQUFFLE1BQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE1BQU0sbUNBQUksRUFBRTtTQUMzQixDQUFDLENBQUE7S0FDSjtJQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekIsT0FBTyxFQUFFLHFDQUFxQztLQUNoRCxDQUFDLENBQUE7QUFDTCxDQUFDO0FBWEQsNEJBV0MifQ==