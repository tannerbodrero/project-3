import React, { Component } from "react";
import {Jumbotron} from "../components/Jumbotron";
import {Container} from "../components/Grid";


class View extends Component {
    state = {
     
    };
  
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      console.log("I am submit button!");
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
                <h1>Item #1</h1>
              </Jumbotron>
              
        </Container>
      );
    }
  }
  
export default View;