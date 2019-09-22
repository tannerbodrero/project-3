import React, { Component } from "react";
import { Row } from "../components/Grid";



class Garage extends Component {
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
        <Row fluid>
            <h1>Welcome to your personal Garage!</h1>
        </Row>

        
      );
    }
  }
  
export default Garage;