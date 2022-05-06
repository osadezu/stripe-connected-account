require('dotenv-flow').config(); // loads .env* variables to process.env

// Load configuration variables
const port = process.env.PORT || 4000; // Use default 4000 if not set in .env

// Initialize server
const express = require('express');
const app = express();

// Setup middleware
app.use(express.json());

// Controllers
// Other resourece routes for the API would be added here
app.use('/api/accounts', require('./controllers/connectedAccounts'));
// app.use('api/balances', require('./controllers/balances'));
// app.use('api/payments', require('./controllers/payments'));

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error('Unhandled: ' + err.stack);
  res.status(500);
  res.json({ error: err });
});

// Listen for requests
app.listen(port, () => {
  console.log(
    `${process.env.NODE_ENV.toUpperCase()} server is running on http://localhost:${port}`
  );
});
