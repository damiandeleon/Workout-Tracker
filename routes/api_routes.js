const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", function({body, params}, res) {
    db.workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.workout.create({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.workout.find({}).limit(5)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });
};