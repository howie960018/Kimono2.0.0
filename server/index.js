import express from "express";

const app = express();
const port = 3000; //add your port here
const PUBLISHABLE_KEY = "pk_test_51L6yQ5LW377V1Lm0PXZXFXt4Y5YZXKs5xlQ2XAXexlcFCs7DYz6ywzMcCmwemLfrSfl0jUHtP0Y6RDgnHrZml3rm00FhtKYyPY";
const SECRET_KEY = "sk_test_51L6yQ5LW377V1Lm0GAnMkTt0wYMWNkWG336Rlj7eizo4fvUSopL9jb1hRsPhWxaTcKihz06BfyhjCxGhNYiS0zT900Mo1gD0pu";
import Stripe from "stripe";

//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});