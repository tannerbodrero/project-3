import React, { Component } from "react";
import API from "../utils/API";
import Item from "../components/Item/Item";
import ItemJumbotron from "../components/ItemJumbotron";
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import ModalExample from "../components/Modal/index"
import "./View.css";



class View extends React.Component {
    
    state = {
        items: [],
        email:"",
        idToken:""
    }

    componentDidMount(props) {
        console.log(this.props.email);
        this.loadView(this.props.email);
    }

      loadView = (email) => {
        console.log("This is the email: " + email)
        API.getItems(email)
          .then(res => this.setState({ items: res.data }))
          .catch(err => console.log(err));
      };

    render() {
        const {term, items} = this.state;
        return (
    <div>
        
        <h3 className="heading">
            Welcome to the View page!
        </h3>
        <Form className="searchbar-wrap">
            <FormGroup>

            </FormGroup>
        </Form>
        
        
       
        
        <ItemJumbotron className="jumbo-background">
        <div className="item-display-container">
          {items.map(item => (
            <Item
              id={item._id}
              key={item._id}
              img={item.img}
              name={item.name}
              details={item.details}
              postedBy={item.postedBy}
              handleClicked={this.handleClicked}
            />
          ))};
        </div>
        </ItemJumbotron>
    </div>
        );
      }
    }


export default View;
