// src/Login.js

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import LoginForm from './LoginForm';
import { withAuth } from "@okta/okta-react";
import "./login.css";
import OktaSignIn from "./SignInWidget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import Registration from "./registrationForm";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              // className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <OktaSignIn 
                
                // code here for log in
                
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">

                <Registration />

              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default withAuth(Login);
