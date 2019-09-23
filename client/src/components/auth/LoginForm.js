// src/LoginForm.js
import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import "./login-form.css"

export default withAuth(class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
    .then(res => this.setState({
      sessionToken: res.sessionToken
    }))
    .catch(err => console.log('Found an error', err));
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({sessionToken: this.state.sessionToken});
      return null;
    }

    return (
      <div className="login-form">
        <h1>Please sign in to Garage-Trader with our OKTA login Form</h1>
      <form onSubmit={this.handleSubmit}>
        <label>


          <input
            id="username" type="text"
            value={this.state.username}
            placeholder="Your Email"
            onChange={this.handleUsernameChange} />
            <br/>



          <input
            id="password" type="password"
            value={this.state.password}
            placeholder="Your OKTA Password"
            onChange={this.handlePasswordChange} />

        </label>
        <br/>
        <input id="submit" type="submit" value="Submit" />
      </form>
      </div>
    );
  }
});