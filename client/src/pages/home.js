import React from "react";
import "./Home.css";
import API from "../utils/API";
import Item from "../components/Item/Item";
import temporary from "../components/temporary-items.json";

class Home extends React.Component {
  state = {
    items: []
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
    console.log("clicked item id: " + id);
  };

  render() {
    return (
      <div>
        <h3 className="heading">
          Here are the most recent listings of tradeable items!
        </h3>

        <div className="item-display-container">

          {this.state.items.map(item => (
            <Item
              id={item.id}
              key={item.id}
              img={item.img}
              name={item.name}
              details={item.details}
              postedBy={item.postedBy}
              handleClicked={this.handleClicked}
            />
          ))}
          ;
        </div>
      </div>
    );
  }
}
export default Home;
