import ShipSchema from "../models/Ship";
import mongoose from "mongoose";

class DbContext {
  Ships = mongoose.model("Ship", ShipSchema);
}

export const dbContext = new DbContext();