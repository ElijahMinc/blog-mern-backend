"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
class HttpRequest {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with get'
                });
            }
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with put'
                });
            }
        });
    }
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with post'
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                return res.status(400).json({
                    message: 'Faild with delete'
                });
            }
        });
    }
}
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvaHR0cFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsTUFBYSxXQUFXO0lBRWhCLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDakMsSUFBSTthQUVIO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDekIsT0FBTyxFQUFFLGdCQUFnQjtpQkFDM0IsQ0FBQyxDQUFBO2FBQ0o7UUFDSixDQUFDO0tBQUE7SUFDSyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQ2xDLElBQUk7YUFFSDtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNULE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxnQkFBZ0I7aUJBQzNCLENBQUMsQ0FBQTthQUNKO1FBQ0osQ0FBQztLQUFBO0lBQ0ssSUFBSSxDQUFDLEdBQVksRUFBRSxHQUFhOztZQUNuQyxJQUFJO2FBRUg7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN6QixPQUFPLEVBQUUsaUJBQWlCO2lCQUM1QixDQUFDLENBQUE7YUFDSjtRQUNKLENBQUM7S0FBQTtJQUNLLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDckMsSUFBSTthQUVIO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDekIsT0FBTyxFQUFFLG1CQUFtQjtpQkFDOUIsQ0FBQyxDQUFBO2FBQ0o7UUFDSixDQUFDO0tBQUE7Q0FJSDtBQXpDRCxrQ0F5Q0MifQ==