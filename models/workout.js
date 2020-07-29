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
      distance: {
        type: Number,
        required: [false, "Enter distance"]
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
},
  {
    toJSON: {
      virtuals: true
    }
  }
);
//Add virtual property to schema called totalDuration
workoutSchema
  .virtual("totalDuration")
  .get(function () {
    let totalDuration = 0
    for (let i = 0; i < this.exercises.length; i++) {
      totalDuration += this.exercises[i].duration
    }
    return totalDuration;
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;