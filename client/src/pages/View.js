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
        idClicked: "",
        itemClicked: "",
        modal: false,
        email: null,
        user:null
    }

    componentDidMount() {
        this.getEmail();
        // this.loadView();
    };

    getEmail(){
        var idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
        console.log("This is the email: " + idToken.idToken.claims.email);
        this.loadUser(idToken.idToken.claims.email);
        
    };

    loadUser = email => {
        API.getUserByEmail(email).then( res => {
          console.log((res.data));
          this.setState({ email: res.data })
        })
          .then(this.updateItems)
          .catch(err => console.log(err));
  
          // console.log(this.state.items);
    };
      
      handleClicked = id => {
          this.setState({idClicked: id});
          for (let i = 0; i < this.state.items.length; i++){
              if(this.state.items[i]._id === id){
                  this.setState({itemClicked: this.state.items[i]});
                  console.log(this.state.itemClicked);
                }
            }
            this.setState({
                modal: !this.state.modal
            });
        };

        updateItems = () => {
            this.setState({items: this.state.email.items})
        }

        toggle = () => {
            this.setState({
                modal: !this.state.modal
            });
        }


    render() {
        const items = this.state.items;
        {console.log(this.state)}
        return (
    <div>
        
        <h3 className="heading">
            Welcome to the View page!
        </h3>
        <Form className="searchbar-wrap">
            <FormGroup>

            </FormGroup>
        </Form>
        
        <ModalExample items={this.state.items} item={this.state.itemClicked} handleClicked={this.handleClicked} newModal={this.state.modal} newToggle={this.toggle}>
          
          </ModalExample>
       
        
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
