import React , {useContext} from "react";
import {Context} from "../contextApi/authContext"
const Nav = () => {
    const {signout} = useContext(Context)
  return (
    <div className="homenav">
      <h2>My Site</h2>
      <button type="button" class="btn btn-sm btn-outline-primary" onClick = {() => signout()}>
        Sign Out
      </button>
    </div>
  );
};

export default Nav;
