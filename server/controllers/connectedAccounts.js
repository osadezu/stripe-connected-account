const router = require('express').Router();

// Get Stripe instance
// This was initialized with secret key in providers script
const stripe = require('./providers/stripe');

// Routes

// Index - list all connected accounts
// This partially developed route is shown here as an example
// illustrating further controller organization
// router.get('/', async (req, res, next) => {
//   try {
//     const { someOptions } = req.params;
//     const accounts = await stripe.accounts.list({ someOptions });
//     return res.json(accounts);
//   } catch (error) {
//     next(error);
//   }
// });

// Create a connected account
router.post('/', async (req, res, next) => {
  try {
    const options = req.params;
    console.log(options);

    const parameters = {
      type: 'custom',
      country: 'US',
      email: 'jenny.rosen@example.com',
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    };

    const account = await stripe.accounts.create(parameters);

    return res.json(account);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
