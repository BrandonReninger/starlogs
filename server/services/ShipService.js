import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";

class ShipService {
  async create(body) {
    let ship = await dbContext.Ships.create(body);
    return ship;
  }
  async getAll() {
    let ships = await dbContext.Ships.find();
    return ships
  }
  async find(query = {}) {
    let values = await dbContext.Ships.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Ships.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const shipService = new ShipService();