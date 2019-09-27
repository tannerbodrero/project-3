import React, { Component } from "react";
import API from "../utils/API";
import ItemJumbotron from "../components/ItemJumbotron";
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import "./View.css";



class View extends React.Component {
    
    state = {
        items: [],
        currentEmail:""
    }

    componentDidMount() {
        this.getEmail();
        this.loadView();
    }

    getEmail(){
        var idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
        // console.log("This is the email: " + idToken.idToken.claims.email);
        this.loadView(idToken.idToken.claims.email);
    }

      loadView = email => {
        // console.log("This is the load email: " + email)
        
        API.getItemsByEmail(email)
          .then(res => this.setState({ items: res.data }))
          .catch(err => console.log(err));
        };

    render() {
        const items = this.state;
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
        {/* {items.map(item => (
            <Item
              id={item._id}
              key={item._id}
              img={item.img}
              name={item.name}
              details={item.details}
              postedBy={item.postedBy}
            />
          ))}; */}
        </div>
        </ItemJumbotron>
    </div>
        );
      }
    }


export default View;
