import React, { Component } from "react";


class Home extends Component {
  state = {
      items: [],
      img: "",
      name: "",
      details: "",
      postedBy: "",
      lookingFor: "",
      email: ""
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ offers: res.data, img: "", name: "", details: "", postedBy: "", lookingFor: "", email: ""})
        )
        .catch(err => console.log(err));
  };



    return (
        <section>
            <div>
                <h1>
                    Hello, this is the garage trader Home Page
                </h1>
            </div>
        </section>
    )
}

export default Home;