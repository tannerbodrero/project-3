import React from "react";
import "./home.css";
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

        {/* 3 hardcoded items to reflect what will be shown from database info after fixing proxy error. */}
          <Item
            img={temporary[0].img}
            name={temporary[0].name}
            details={temporary[0].details}
            postedBy={temporary[0].postedBy}
          />
          <Item
            img={temporary[1].img}
            name={temporary[1].name}
            details={temporary[1].details}
            postedBy={temporary[1].postedBy}
          />
          <Item
            img={temporary[2].img}
            name={temporary[2].name}
            details={temporary[2].details}
            postedBy={temporary[2].postedBy}
          />

          {/* This is the real code to display database items */}
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
