//Create models
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter exercise names"
      },
      duration: {
        type: Number,
        required: "Enter duration time"
      },
      weight: {
        type: Number,
        required: [false, "Enter weight"]
      },
      reps: {
        type: Number,
        required: [false, "Enter number of repetitions"]
      },
      sets: {
        type: Number,
        required: [false, "Enter number of sets"]
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;