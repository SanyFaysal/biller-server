const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// import routes
const billingRoute = require('./routes/billing.route');
const userRoute = require('./routes/user.route');

// routes
app.get('/', (req, res) => {
  res.send('Route is working! YaY!');
});

app.use('/api', billingRoute);
app.use('/api', userRoute);

module.exports = app;
