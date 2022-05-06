require('dotenv-flow').config(); // loads .env* variables to process.env

// Load configuration variables
const port = process.env.PORT || 4000; // Use default 4000 if not set in .env

// Initialize server
const express = require('express');
const app = express();

// Controllers
// Other resourece routes for the API would be added here
app.use('api/accounts', require('./controllers/connectedAccounts'));
// app.use('api/balances', require('./controllers/balances'));
// app.use('api/payments', require('./controllers/payments'));

// Error Handling
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message;
  res.status(statusCode).send(message);
});

// Listen for requests
app.listen(port, () => {
  console.log(
    `${process.env.NODE_ENV.toUpperCase()} server is running on http://localhost:${port}`
  );
});
