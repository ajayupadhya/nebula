import React, { useState, useContext } from "react";
import "./login.css";
import { Context } from "../contextApi/authContext";

import { Redirect, Link } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const {
    state: { isSignedIn },
    signin,
  } = useContext(Context);

  if (isSignedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <div class="container-fluid">
        <div class="top-menu mynav">
          <div class="container">
            <div class="row mybar">
              <div class="S logo">
                <h2>My Page</h2>
              </div>
              <div>
                <ul class="bottom">
                  <li>
                    <button type="button" class="btn btn-primary btn-sm">
                      <i class="fas fa-user-lock"></i> Login
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-primary"
                    >
                      <Link to="/">
                        <i class="fas fa-user-plus"></i> Sign Up
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="login-body container-fluid">
          <div class="container">
            <div class="row middlecontainer">
              <div class="col-md-5">
                <div class="login-text loginfield">
                  <h4>Login to See Details</h4>

                  <input
                    type="text"
                    placeholder="Enter Email"
                    class="form-control "
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Enter Password"
                    class="form-control"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />

                  <label class="w-100" for="">
                    Forget Password?
                  </label>

                  <button
                    className="btn btn-primary loginbtn"
                    onClick={() => signin(email, password)}
                  >
                    Sign In
                  </button>
                  <p>
                    Dont have an account <a href="">Sign Up!</a>
                  </p>
                </div>
              </div>
              <div class="col-md-5">
                <div class="login-img">
                  <img src="assets/images/login.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
