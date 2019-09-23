import React, { Component } from "react";
import ItemJumbotron from "../components/ItemJumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, SplashBtn } from "../components/Form";
import API from "../utils/API"


class Garage extends Component {
    state = {
      user: "friend",
      items: []
    };
  
componentDidMount() {
var idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
this.setState({ user: idToken.idToken.claims.name });

this.loadGarage(this.state.user);
}


loadGarage = name => {
API.getItemsByName(name)
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
}
   

handleInputChange = event => {
const { name, value } = event.target;
this.setState({
[name]: value
});
};
  
    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   console.log("I am submit button!");
    //   if (this.state.title && this.state.author) {
    //     API.saveBook({
    //       title: this.state.title,
    //       author: this.state.author,
    //       synopsis: this.state.synopsis
    //     })
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   }
    // };
  
    render() {
      return (
        <Row fluid>
            <h1> Welcome {this.state.user}! </h1>
        </Row>

        
      );
    }
  }
  
export default Garage;