//"sk_test_51K75tFDudCx83tulvtwD7cyFwWQREnZhpbT7OMpHFwV58HP8FgsBPegelmYQ69jHVhlY79o5Ca024P0lnr4S9I6q00G6lt5Baz"

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51K75tFDudCx83tulvtwD7cyFwWQREnZhpbT7OMpHFwV58HP8FgsBPegelmYQ69jHVhlY79o5Ca024P0lnr4S9I6q00G6lt5Baz"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved : ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api
