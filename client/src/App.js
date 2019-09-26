import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/Home";
=======
import Home from "./pages/home";
>>>>>>> 74d2105d33a7e585e033cf6a5c24fd2b00d66cd0
import Splash from "./pages/Splash";
import Garage from "./pages/Garage";
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
