import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "../../shared/GoogleSignIn/GoogleSignIn";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [inputType, setInputType] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const handlePasswordType = () => {
    setIsPassword(!isPassword);
    if (isPassword) {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  return (
    <div
      style={{ fontFamily: "'Varela', sans-serif" }}
      className="authentication-form-container d-flex justify-content-center align-items-center"
    >
      <form className="authentication-form bg-white py-5 px-4 my-5">
        <h2 className="text-center mb-4">Login</h2>
        <fieldset>
          <label htmlFor="" className="d-block fw-bold">
            Email
          </label>
          <input
            type="text"
            className="w-100 pb-2 mt-1 border-0 "
            placeholder="Enter your email"
          />
        </fieldset>
        <fieldset className="mt-3">
          <label htmlFor="" className="d-block fw-bold">
            Password
          </label>
          <div className="d-flex">
            <input
              type={inputType}
              className="w-100 pb-2 mt-1 border-0 "
              placeholder="Enter your password"
            />
            <span onClick={handlePasswordType} className="fs-5">
              {isPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
        </fieldset>
        <input
          id="authentication-btn"
          type="submit"
          className="w-100 py-2 mt-5 text-white fw-bold border-0"
          value="Sign Up"
        />
        <div className="text-center my-3">
          <small className="fw-bold">
            Don't have an account? <Link to="/signUp">Sign Up</Link>
          </small>
        </div>
        <p className="fw-bold fs-4 text-center">or</p>
        <GoogleSignIn></GoogleSignIn>
      </form>
    </div>
  );
};

export default Login;
