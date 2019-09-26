import React, { Component } from "react";
import API from "../utils/API";
import Item from "../components/Item/Item";
import ItemJumbotron from "../components/ItemJumbotron";
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import ModalExample from "../components/Modal/index"
import "./View.css";

class View extends React.Component {

    // componentDidMount(props) {
    //     this.loadView(this.props.email);
    // }

    // //   loadView = email => {
    // //     API.getItemsByName(email)
    // //       .then(res => this.setState({ items: res.data }))
    // //       .catch(err => console.log(err));
    // //   };

    render() {
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
          
        </div>
        </ItemJumbotron>
    </div>
        );
      }
    }


export default View;
