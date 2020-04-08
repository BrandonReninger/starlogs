import ShipSchema from "../models/Ship";
import LogSchema from "../models/Log"
import mongoose from "mongoose";

class DbContext {
  Ships = mongoose.model("Ship", ShipSchema);
  Logs = mongoose.model("Log", LogSchema)
}

export const dbContext = new DbContext();