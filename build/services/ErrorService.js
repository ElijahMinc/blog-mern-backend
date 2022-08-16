"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(status, message, errors = []) {
        super();
        this.message = message;
        this.status = status;
        this.errors = errors;
    }
    static UnauthorizedError() {
        return new ApiError(401, 'User is not authorized');
    }
    static BadRequest(message, errors) {
        return new ApiError(400, message, errors);
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL0Vycm9yU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFFBQVMsU0FBUSxLQUFLO0lBSWhDLFlBQVksTUFBYyxFQUFFLE9BQWUsRUFBRSxNQUFNLEdBQUcsRUFBRTtRQUNyRCxLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsaUJBQWlCO1FBQ3JCLE9BQU8sSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFFLENBQUE7SUFDdEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBNEIsRUFBRSxNQUEyQjtRQUN4RSxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDNUMsQ0FBQztDQUNIO0FBbEJELDRCQWtCQyJ9