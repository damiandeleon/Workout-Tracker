const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({})
      .then(databaseWorkout => {
        res.json(databaseWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", function({body, params}, res) {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then(databaseWorkout => {
        res.json(databaseWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(databaseWorkout => {
        res.json(databaseWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).limit(5)
      .then(databaseWorkout => {
        res.json(databaseWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};