import React, { Component } from "react";
import "./Splash.css";
import { Container } from "../components/Grid";
import SplashButtons from "../components/SplashButtons/SplashButtons"



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
        <SplashButtons />
      </Container>
    );
  }
}

export default Splash;
