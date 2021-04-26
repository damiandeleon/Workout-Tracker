const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

const morgan = require('morgan'); 
app.use(morgan('tiny'));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });