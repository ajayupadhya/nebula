import { Provider as AuthProvider } from "./contextApi/authContext";
import { Context as authContext } from "./contextApi/authContext";
import LoginPage from "./component/login";
import Signup from "./component/signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Home from "./component/home";
import ListData from "./component/listdata";
import Createdata from "./component/createdata";
function App() {
  const [loading, setloading] = useState(false);
  const {
    state: { isSignedIn, user },
    localSignIn,
  } = useContext(authContext);
  useEffect(() => {
    localSignIn();
    setTimeout(() => {
      setloading(true);
    }, 1000);
  }, []);
  console.log(isSignedIn, user);
  if (!loading) {
    return <div></div>;
  }
  if (isSignedIn) {
    return (
      <Router>
        <Redirect to = "/"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createdata" component={Createdata} />
          <Route exact path="/listdata" component={ListData} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const Ap = App;

export default () => {
  return (
    <AuthProvider>
      <Ap />
    </AuthProvider>
  );
};
