import ShipSchema from "../models/Ship";
import LogSchema from "../models/Log";
import CommentSchema from "../models/Comment"
import mongoose from "mongoose";

class DbContext {
  Ships = mongoose.model("Ship", ShipSchema);
  Logs = mongoose.model("Log", LogSchema);
  Comments = mongoose.model("Comment", CommentSchema)
}

export const dbContext = new DbContext();