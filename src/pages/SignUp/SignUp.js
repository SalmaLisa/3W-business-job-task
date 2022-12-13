import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import GoogleSignIn from "../../shared/GoogleSignIn/GoogleSignIn";

const SignUp = () => {
  return (
    <div
      style={{ fontFamily: "'Varela', sans-serif" }}
      className="signup-form-container d-flex justify-content-center align-items-center"
    >
      <form className="signup-form bg-white py-5 px-4 my-5">
        <h2 className="text-center mb-4">Sign Up</h2>
        <fieldset>
          <label htmlFor="" className="d-block fw-bold">
            Email
          </label>
          <input
            type="text"
            className="w-100 pb-2 mt-1 "
            placeholder="Enter your email"
          />
        </fieldset>
        <fieldset className="mt-3">
          <label htmlFor="" className="d-block fw-bold">
            Password
          </label>
          <input
            type="text"
            className="w-100 pb-2 mt-1 "
            placeholder="Enter your password"
          />
        </fieldset>
        <input
          id="signup-btn"
          type="submit"
          className="w-100 py-2 mt-5 text-white fw-bold"
          value="Sign Up"
        />
        <div className="text-center my-3">
          <small className="fw-bold">
            Already have an account? <Link>Login</Link>
          </small>
        </div>
        <p className="fw-bold fs-4 text-center">or</p>
        <GoogleSignIn></GoogleSignIn>
      </form>
    </div>
  );
};

export default SignUp;
