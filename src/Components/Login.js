import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Button from "./Button";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useStateValue } from "../StateProvider";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user &&
        dispatch({
          type: "SET_USER",
          user,
        });
    });
  }, []);
  const signin = async (e) => {
    e.preventDefault();
    try {
      const obj = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };
  const register = async (e) => {
    e.preventDefault();
    try {
      const obj = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form className="login__form" onSubmit={signin}>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Sign In" type="submit" />
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Button text="Create Your Amazon Account" onClick={register} />
      </div>
    </div>
  );
};

export default Login;
