import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Context } from "../contextApi/authContext";
const Signup = () => {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [success, setsuccess] = useState("");
  const {
    state: { isSignedIn, errorMessage },
    signup,
  } = useContext(Context);

  const signUP = () => {
    signup(name, lastname, email, password);
    setname("");
    setemail("");
    setlastname("");
    setpassword("");
    setsuccess("User Registered Succesfully");
  };
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
                      <i class="fas fa-user-lock"></i> Signup
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-primary"
                    >
                      <Link to="/signin">
                        <i class="fas fa-user-plus"></i> Login
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
                  <h4>Create a user Account</h4>

                  <input
                    type="text"
                    placeholder="Enter First Name"
                    class="form-control"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    class="form-control"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    class="form-control"
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

                  <button
                    class="btn btn-primary loginbtn"
                    onClick={() => signUP()}
                  >
                    Sign Up
                  </button>
                  {errorMessage ? <p>{errorMessage}</p> : <p>{success}</p>}
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

export default Signup;
