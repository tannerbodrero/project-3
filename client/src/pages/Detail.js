import React, { Component } from "react";
import API from "../utils/API";

class Detail extends Component {
  state = {
    item: {}
  };

  componentDidMount() {
    API.getItems(this.props.match.params.id)
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err));
  }

  render() {
      
  }

}