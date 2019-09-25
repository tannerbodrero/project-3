import React, { Component } from "react";
import "./Splash.css";
import Jumbotron from "../components/ItemJumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";

class Splash extends Component {
    state = {
      isHidden: true,
      hidden: true,
      username: "",
      password: ""
    };
  
  
    toggleHidden = (event) => {
      event.preventDefault()
      this.setState({
        isHidden: !this.state.isHidden
      });
      console.log(this.state.isHidden)
    }
  
    secondHidden = (event) => {
      event.preventDefault()
      this.setState({
        hidden: !this.state.hidden
      });
      console.log(this.state.hidden)
    }
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    render() {
      return (
        <Container fluid>
              <Jumbotron>
                <h1>Landing Page Work Needed</h1>
              </Jumbotron>

          {/* With Authentication Implemented, we need:
            
          Sign In
            a button that routes to localhost:3000/garage
            (this will automatically take them to /login and then to garage after)
            +
          Browse Items
            a button that routes to localhost:3000/ */ }

             
        </Container>
      );
    }
  }
  
export default Splash;

