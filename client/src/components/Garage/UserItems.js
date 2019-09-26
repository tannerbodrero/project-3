import React from "react";
import API from "../../utils/API";
import Item from "../Item/Item";
import ItemJumbotron from "../ItemJumbotron";
import ModalExample from "../Modal/index";
// import "./UserItem.css";

class UserItems extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      items: [],
      term: "",
      idClicked: "",
      itemClicked: "",
      modal: false,
      email: null,
      user:null,
    }
  };
  
componentDidMount() {
    this.getCredentials();}
    
    getCredentials() {
      var idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
      console.log(idToken.idToken.claims.email);
      this.loadUser(idToken.idToken.claims.email);
    }
  
    loadUser = email => {
      API.getUserByEmail(email).then( res => {
        console.log((res.data));
        this.setState({ user: res.data })
      })
        .then(this.updateItems)
        .catch(err => console.log(err));

        // console.log(this.state.items);

        
    };
  
    updateItems = () => {
      this.setState({items: this.state.user.items})

    }


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
  
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {

      // const items = this.state.user.items;
      return (
        <div>
          <ModalExample items={this.state.items} item={this.state.itemClicked} handleClicked={this.handleClicked} newModal={this.state.modal} newToggle={this.toggle}>
          
          </ModalExample>
          
          <ItemJumbotron className="jumbo-background user-item-jumbo">
          <h1 className="preview-text"> Click An Item For More Info </h1> 
          <div className="item-display-container">
            {this.state.items.map(item => (
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
  export default UserItems;