import React from "react";
import "./Home.css";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Item from "../components/Item/Item";
import ItemJumbotron from "../components/ItemJumbotron";
import temporary from "../components/temporary-items.json";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ModalExample from "../components/Modal/index"



function searchingFor(term) {
    return function(x){
      return x.name.toLowerCase().includes(term.toLowerCase()) || false;
    }
  }

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    items: [],
    term: "",
    idClicked: "",
    itemClicked: "",
    modal: false
  }
  this.searchHandler = this.searchHandler.bind(this);
};

searchHandler(event){
    this.setState({ term : event.target.value })
    console.log(event.target.value);
}

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
    const {term, items} = this.state;
    return (
      <div>

        <h3 className="heading">
          Here are the most recent listings of tradeable items!
        </h3>
        <Form className="searchbar-wrap">
        <FormGroup>
          <Label className="text1" for="exampleSearch">Looking for something in specific?</Label>
          <Input
            className="search-bar"
            type="text"
            name="search"
            id="exampleSearch"
            placeholder="Search for an Item to Trade for"
            onChange={this.searchHandler}
            value={term}
          />
        </FormGroup>
      </Form>
        <ModalExample items={this.state.items} item={this.state.itemClicked} handleClicked={this.handleClicked} newModal={this.state.modal} newToggle={this.toggle}>
        
        </ModalExample>
        
        <ItemJumbotron className="jumbo-background">
          <h1 className="preview-text"> Click An Item For More Info </h1> 
        <div className="item-display-container">
          {items.filter(searchingFor(term)).map(item => (
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
