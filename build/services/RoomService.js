"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const MyMap_1 = require("./MyMap");
class RoomService {
    constructor() {
        this.db = MyMap_1.MyMap.get();
    }
    get(key) {
        return this.db.map.get(key);
    }
    has(roomId) {
        return this.db.map.has(roomId);
    }
    set(key, value) {
        this.db.map.set(key, value);
    }
    keys() {
        return this.db.map.keys();
    }
    forEach(callbackfn, thisArg) {
        return this.db.map.forEach(callbackfn);
    }
    clear(room) {
        room.clear();
    }
    delete(key) {
        this.db.map.delete(key);
    }
}
exports.RoomService = RoomService;
exports.default = new RoomService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vbVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvUm9vbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQStCO0FBRS9CLE1BQWEsV0FBVztJQUF4QjtRQUNVLE9BQUUsR0FBVSxhQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7SUE4QmpDLENBQUM7SUE1QkUsR0FBRyxDQUFDLEdBQVc7UUFDWixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRUQsR0FBRyxDQUFDLE1BQWM7UUFDZixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVEsRUFBRSxLQUFVO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELElBQUk7UUFDRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFRCxPQUFPLENBQUMsVUFBOEQsRUFBRSxPQUFhO1FBQ2xGLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBbUI7UUFDdEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRTFCLENBQUM7Q0FDSDtBQS9CRCxrQ0ErQkM7QUFHRCxrQkFBZSxJQUFJLFdBQVcsQ0FBQSJ9