import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import API from "../utils/API";
import { withAuth } from "@okta/okta-react";
import "./Garage.css";

export default withAuth(
  class Garage extends Component {
    constructor(props) {
      super(props);
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
      this.state = {
        authenticated: null,
        user: "friend",
        email: "email",
        items: []
      };
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidMount() {
      this.getCredentials();
      this.loadGarage(this.state.user);
    }

    componentDidUpdate() {
      this.checkAuthentication();
      this.loadGarage(this.state.user);
    }

    getCredentials() {
      var idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
      this.setState({ user: idToken.idToken.claims.name });
      this.setState({ email: idToken.idToken.claims.email });
    }

    loadGarage = name => {
      API.getItemsByName(name)
        .then(res => this.setState({ items: res.data }))
        .catch(err => console.log(err));
    };

    render() {
      const button = this.state.authenticated ? (
        <button
          onClick={() => {
            this.props.auth.logout();
          }}
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => {
            this.props.auth.login();
          }}
        >
          Sign In
        </button>
      );

      return (
        <div className="garage-wrap">
          <Row fluid className="top-row">
            <h1> Welcome to your personal garage {this.state.user}! </h1>
            <br />
            <h2>{" "}{this.state.user}'s registered email is {this.state.email}{" "}</h2>
            <br />
            {button}
            <br />
          </Row>

          <Row className="bottom-row">

          <Container fluid className="left-side">
            <h3>Left side for Menu of Post/Delete Etc.</h3>
          </Container>

          <Container fluid className="right-side">
            <h3>Right side for Displaying Items, or Forms or something.</h3>
          </Container>

          </Row>
        </div>
      );
    }
  }
);
