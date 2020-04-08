import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";

class ShipService {
  async find(query = {}) {
    let values = await dbContext.Ship.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Ship.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const shipService = new ShipService();