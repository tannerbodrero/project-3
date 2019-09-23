import React from "react";
import "./Home.css";
import {Jumbotron, ItemJumbotron} from "../components/Jumbotron";
import API from "../utils/API";
import Item from "../components/Item/Item";
import ModalExample from "../components/Modal/index"

class Home extends React.Component {
  
  state = {
    items: [],
    idClicked: "",
    itemClicked: "",
    modal: false
    
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  };

  handleClicked = id => {
    // console.log("You click id " + id);
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
    // console.log(this.state.modal)
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <h3 className="heading">
          Here are the most recent listings of tradeable items!
        </h3>
        <ModalExample items={this.state.items} item={this.state.itemClicked} handleClicked={this.handleClicked} newModal={this.state.modal} newToggle={this.toggle}>
        
        </ModalExample>
        
        <ItemJumbotron>
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
export default Home;
