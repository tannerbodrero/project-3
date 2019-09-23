// src/Login.js

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import LoginForm from './LoginForm';
import { withAuth } from "@okta/okta-react";
import "./login.css";
import OktaSignIn from "./SignInWidget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import Registration from "./registrationForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  onSuccess = res => {
    console.log("successfull");
    return this.props.auth.redirect({
      sessionToken: res.session.token
    });
  };

  onError(err) {
    console.log("error logging in", err);
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    console.log(this.props);
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ? (
      <Redirect to={{ pathname: "/" }} />
    ) : 
    (
      <div className="login-body">
        <div>
          <OktaSignIn
            baseUrl={this.props.baseUrl}
            onSuccess={this.onSuccess}
            onError={this.onError}
          />
        </div>
        <div>
          <Registration />
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
