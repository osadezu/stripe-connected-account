# Simplifeye SWE Internship Take Home Task
### Stripe Connected Account Creator
Simple React application to create Stripe connected accounts

Candidate: [Oscar Sánchez de Zulueta](https://github.com/osadezu)

## Considerations

- For simplicity, this repository contains the directories for both front-end and back-end of the task application. In a larger application it might make more sense to have separate repositorires for each part of the application.

## Installation
### Back-End
1. After cloning this repository locally, change to `server/` directory and run:

```
npm install
```

2. Provide the [Stripe API Secret Keys](https://dashboard.stripe.com/apikeys) as environment variables. The application can load the test and live keys from these .env files respectively:

```
# .env.development.local
STRIPE_SECRET_KEY=sk_test_*****

# .env.production.local
STRIPE_SECRET_KEY=sk_live_*****
```


## About Dependencies

- **[dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow)**: extends [dotenv](https://github.com/motdotla/dotenv), used to separate secrets into `.env.local` while keeping `.env` file tracked in version control.

