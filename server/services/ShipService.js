import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";

class ShipService {
  async remove(shipId) {
    let ship = await dbContext.Ships.findByIdAndDelete(shipId)
    return ship;
  }

  async getById(params, shipId) {
    let ship = await dbContext.Ships.find(shipId)
    if (!ship) {
      throw new BadRequest("Invalid shipId")
    }
    return ship;
  }

  async edit(shipId, body) {
    let ship = await dbContext.Ships.findByIdAndUpdate(shipId, body, {
      new: true
    })
    return ship;
  }

  async create(body) {
    let ship = await dbContext.Ships.create(body);
    return ship;
  }

  async getAll() {
    let ships = await dbContext.Ships.find();
    return ships

  }

}

export const shipService = new ShipService();