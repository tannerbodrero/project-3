import React from "react";
import "./Home.css";
import API from "../utils/API";
import Item from "../components/Item/Item";
import ItemJumbotron from "../components/ItemJumbotron";
import temporary from "../components/temporary-items.json";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
    console.log("clicked item id: " + id);
  };

  render() {
    const {term, items} = this.state;
    return (
      <div>
        <Form>
        <FormGroup>
          <Label for="exampleSearch">Looking for something in specific?</Label>
          <Input
            type="text"
            name="search"
            id="exampleSearch"
            placeholder="Search for an Item to Trade for"
            onChange={this.searchHandler}
            value={term}
          />
        </FormGroup>
      </Form>
        <h3 className="heading">
          Here are the most recent listings of tradeable items!
        </h3>

        
        <ItemJumbotron>
        <div className="item-display-container">
          {items.filter(searchingFor(term)).map(item => (
            <Item
              id={item.id}
              key={item.id}
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
