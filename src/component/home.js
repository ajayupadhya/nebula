import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Nav from "./nav";
const Home = () => {
  return (
    <div className="home">
     <Nav />
      <div className="homemiddle">
        <div>
          <button type="button" class="btn btn-sm btn-outline-primary">
            <Link to="/createdata">Create Data</Link>
          </button>
        </div>
        <div>
          <button type="button" class="btn btn-sm btn-outline-primary">
            <Link to="/listdata">List Data</Link>
          </button>
        </div>
        <div class="col-md-5">
          <div class="login-img">
            <img src="assets/images/login.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
