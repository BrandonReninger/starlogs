import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Ship = new Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
      required: true
  },
  yearBuilt: {
    type: Number,
    required: true
  },
  captain: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

export default Ship;