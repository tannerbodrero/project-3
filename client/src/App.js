import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home2";
import Splash from "./pages/Splash";
import Garage from "./pages/Garage";
import Nav from "./components/Nav";
import View from "./pages/View";

import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Login from "./components/auth/Login";
import Protected from "./components/auth/Protected";

function onAuthRequired({ history }) {
  history.push("/login");
}

function App() {
  return (
    <Router>
      <Nav />
      <Security
        issuer="https://dev-264100.okta.com/oauth2/default"
        clientId="0oa19ydanvXbR9eeL357"
        redirectUri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
      >
        <Route exact path="/" component={Splash} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/splash" component={Splash} />
        <Route exact path="/view" component={View} />
        <SecureRoute exact path="/garage" component={Garage} />
        <SecureRoute exact path="/protected" component={Protected} />

        <Route
          path="/login"
          render={() => <Login baseUrl="https://dev-264100.okta.com" />}
        />
        <Route path="/implicit/callback" component={ImplicitCallback} />
      </Security>
    </Router>
  );
}

export default App;
