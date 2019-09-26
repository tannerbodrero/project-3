import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Splash from "./pages/Splash";
import Garage from "./pages/Garage";
import View from "./pages/View";
import Nav from "./components/Nav";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Login from "./components/auth/Login";



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

        {/* <Route exact path="/signup" component={Signup} /> */}
     
        <SecureRoute exact path="/garage" component={Garage} />

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
