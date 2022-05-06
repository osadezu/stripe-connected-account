const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Verify that STRIPE_SECRET_KEY environment variable was provided.
if (!stripeSecretKey) {
  console.error(
    `Stripe secret key was not provided, please verify that the environment variable is set.\n` +
      `You can run the server using 'npm start' (development) or 'npm run server' (production) which set the NODE_ENV variable indicating whether to load .env.development.local or .env.production.local respectively. Otherwise, please set the STRIPE_SECRET_KEY environment variable manually.`
  );
  process.exit(1);
}

// Set Stripe secret key.
// Note: dotenv-flow will load the STRIPE_SECRET_KEY environment variable from
// .env.development.local or .env.production.local based on NODE_ENV
const stripe = require('stripe')(stripeSecretKey);

module.exports = stripe;
