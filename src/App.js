import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";
const promise = loadStripe(
  "pk_test_51K75tFDudCx83tul4U6v0OAwaGi2TzfnYFDqisSkfDApelnpva7Lo4j6iJUd6akdeXpuEvEG7eVG6x0QGjBeDBTY00BkbjhNrO"
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                {" "}
                <Payment />
              </Elements>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
