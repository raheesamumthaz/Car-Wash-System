const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, "Please enter name of the car"],
  },
  model: {
    type: String,
    lowercase: true,
    required: [true, "Please enter the model of the car"],
  },
  status: {
    type: String,
    lowercase: true,
    enum: ["active", "inactive"],
    default: "active",
  },
});

carSchema.index({ name: 1, model: 1 }, { unique: true });
const car = mongoose.model("car", carSchema);

module.exports = car;
