import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, LoginButton, FormBtn, SignButton } from "../components/Form";


class Books extends Component {
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

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
  };

  render() {
    return (
      <Container fluid>
            <Jumbotron>
              <h1>Garage-Trade</h1>
            </Jumbotron>
            <form>
              <LoginButton
              onClick={this.toggleHidden.bind(this)}
              >
                Go to Garage
              </LoginButton>
              {this.state.isHidden ? null :
              <div> Log in

              <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="username (required)"
              />
              <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="password (required)"
              />
              <FormBtn
                disabled={!(this.state.password && this.state.username)}
                onClick={this.handleFormSubmit}
              >
                Log in
              </FormBtn>
              </div> 
              }

              <SignButton
              onClick={this.secondHidden.bind(this)}
              >
                Build your Garage
              </SignButton>
              {this.state.hidden ? null :
              <div> Sign up

              <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="username (required)"
              />
              <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="password (required)"
              />
              <FormBtn
                disabled={!(this.state.password && this.state.username)}
                onClick={this.handleFormSubmit}
              >
                Sign up
              </FormBtn>
              </div> 
              }              
            </form>
      </Container>
    );
  }
}

export default Books;
