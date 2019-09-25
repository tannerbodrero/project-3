import React, { Component } from "react";
import API from "../utils/API";
import { withAuth } from "@okta/okta-react";
import "./Garage.css";
import PostForm from "../components/Garage/PostForm"
import UserItems from "../components/Garage/UserItems"

export default withAuth(
  class Garage extends Component {
    constructor(props) {
      super(props);
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
      this.state = {
        authenticated: null,
        user: null,
        email: null,
        items: [],
        form: false
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

      // Conditional Render for Login/Logout Button
      const button = this.state.authenticated ? (
        <button
          className="garage-button"
          onClick={() => {
            this.props.auth.logout();
          }}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="garage-button"
          onClick={() => {
            this.props.auth.login();
          }}
        >
          Sign In
        </button>
      );

      // Conditional Render - Display based off of this.state.form
      const display = this.state.form ? (
        <div>
        <h1 className="heading" >Create Your Item Here!</h1>
        <PostForm user={this.state.user} email={this.state.email}/>
        </div>
      ) : (
        <div>
        <h1 className="heading" > {this.state.user}'s Posted Items</h1>
        <UserItems />
        </div>
      );


      return (
        <div>
          <div className="top-div">
            <div className="left-side">
              <h1 className="garage-heading">Welcome {this.state.user}!</h1>
            </div>

            <div className="right-side">
              <button
                className="garage-button"
                onClick={() => this.setState({ form: true })}
              >
                {" "}
                Post Item
              </button>
              <button
                className="garage-button"
                onClick={() => this.setState({ form: false })}
              >
                Your Items
              </button>
              {button}
            </div>
          </div>

          <div className="bottom-div">{display}</div>
        </div>
      );
    }
  }
);
