import React, { Component } from "react";
// import ItemJumbotron from "../components/ItemJumbotron";
import { Row } from "../components/Grid";
// import { Input, FormBtn, SplashBtn } from "../components/Form";
import API from "../utils/API"
import { withAuth } from "@okta/okta-react";



export default withAuth(class Garage extends Component {
  constructor(props) {
    super(props);
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.state = {
      authenticated: null,
      user: "friend",
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
    var idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({ user: idToken.idToken.claims.name });
    this.loadGarage(this.state.user);
  }
  
  componentDidUpdate() {
    this.checkAuthentication();
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
  

  
    render() {
const button = this.state.authenticated ?
<button onClick={() => {this.props.auth.logout()}}>Logout</button> :
<button onClick={() => {this.props.auth.login()}}>Login</button>;
      return (
        <Row fluid>
            <h1> Welcome {this.state.user}! </h1>
            {button}
            
        </Row>

        
      );
    }
  });
  
