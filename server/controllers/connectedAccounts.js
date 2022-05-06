const router = require('express').Router();

// Get Stripe instance
// This was initialized with secret key in providers script
const stripe = require('../providers/stripe');

// Routes

// Index - list all connected accounts
// This partially developed route is shown here as an example
// illustrating further controller organization
router.get('/', async (req, res, next) => {
  try {
    // const { someOptions } = req.params;
    const accounts = await stripe.accounts.list();
    return res.json(accounts.data);
  } catch (error) {
    next(error);
  }
});

// Create a connected account
router.post('/', async (req, res) => {
  try {
    const parameters = req.body;
    // const parameters = {
    //   type: 'custom',
    //   country: 'US',
    //   email: 'jenny.rosen@example.com',
    //   capabilities: {
    //     card_payments: { requested: true },
    //     transfers: { requested: true },
    //   },
    // };

    const account = await stripe.accounts.create(parameters);
    console.log('Account created: ' + account.id);
    res.json(account);
  } catch (err) {
    // Handle inavlid request error
    if (err.statusCode === 400) {
      res.status(err.statusCode);
      res.json({
        message: err.message,
        error: err,
      });
    } else {
      // Forward to catch-all error handler
      next(err);
    }
  }
});

module.exports = router;
