const Workout = require("../models/workout");


//get workouts
module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });


  
  app.put("/api/workouts/:id", function ({ body, params }, res) {
    Workout.findByIdAndUpdate(
      { _id: params.id },
      {$push: {exercises:body}},
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
    Workout.create({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find({}).limit(7)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", function (req, res) {
    Workout.create({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err)
      })
  });
};

