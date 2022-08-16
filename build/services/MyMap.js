"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyMap = void 0;
class MyMap {
    constructor() {
        this.map = new Map();
    }
    static get() {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}
exports.MyMap = MyMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvTXlNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxLQUFLO0lBS2Y7UUFGQSxRQUFHLEdBQTRCLElBQUksR0FBRyxFQUFFLENBQUM7SUFFbkIsQ0FBQztJQUdoQixNQUFNLENBQUMsR0FBRztRQUNkLElBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDO1lBQ2hCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUMvQjtRQUVELE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0NBQ0g7QUFmRCxzQkFlQyJ9