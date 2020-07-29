//Create routes
const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
// $push: { friends: friend }
router.post("/api/workouts", ({body}, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const {body, params} = req;
  Workout.findByIdAndUpdate(params.id, {$push: { exercises: body }})
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.json(err);
  });
}); 

module.exports = router;

//   Add exercises to a previous workout plan.

//   * Add new exercises to a new workout plan.

//   * View multiple the combined weight of multiple exercises on the `stats` page.
