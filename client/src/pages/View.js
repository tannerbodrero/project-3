import React, { Component } from "react";
import {Jumbotron, ItemJumbotron} from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, SplashBtn } from "../components/Form";

class View extends Component {
    state = {
     
    };
  
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleRequestItem = event => {
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
        <div>
              <ItemJumbotron>
                <h1>Item</h1>
              </ItemJumbotron>
            
              <FormBtn onClick={this.handleRequestItem}>
                  Request Exchange
              </FormBtn>
            
              
        </div>
      );
    }
  }
  
export default View;