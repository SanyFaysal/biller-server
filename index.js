const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require('./app');

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(`Mongoose is connected`.blue.bold)
  );
} catch (e) {
  console.log(`could not connect`.red.bold);
}

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
