import React, { Component } from "react";
import "./Splash.css";
import Jumbotron from "../components/ItemJumbotron";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";

class Splash extends Component {
  state = {
    isHidden: true,
    hidden: true,
    username: "",
    password: ""
  };

  toggleHidden = event => {
    event.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    });
    console.log(this.state.isHidden);
  };

  secondHidden = event => {
    event.preventDefault();
    this.setState({
      hidden: !this.state.hidden
    });
    console.log(this.state.hidden);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>

        <div className="splash-jumbo">
          <h1 className="logo-text">GARAGE</h1><img className="splash-logo" src="/box3.png" alt="logo"/><h1 className="logo-text">TRADER</h1>
        </div>
        <div className="button-wrap">

            <Link className="splash-link" to="/home"><button className="splash-button">JUST BROWSING</button></Link>

            <Link className="splash-link" to="/garage"><button className="splash-button">SIGN UP or SIGN IN</button></Link>
          
        </div>

        

      </Container>
    );
  }
}

export default Splash;
