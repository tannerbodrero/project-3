import React from "react";
import "../Item/item.css";
import "./PostForm.css";
import API from "../../utils/API";


class PostForm extends React.Component {
  state = {
    itemName: "",
    owner: "",
    lookingFor: "",
    img: "https://vignette.wikia.nocookie.net/hellraiser/images/2/2b/Box.png/revision/latest?cb=20160204114708",
    details: ""
  };

  // Live updating to state
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//Submit button click function
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("hello world")
    
    // grab current states 
    let itemData = {
      img: this.state.img,
      name: this.state.itemName,
      postedBy: this.props.user,
      email: this.props.email,
      details: this.state.details,
      lookingFor: this.state.lookingFor,
    }
    
    // Post the item to database
    API.saveItem(itemData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render(props) {

    const previewImage = this.state.img || "/public/box3.png";

    return (
      <div className="form-component">

          {/* Left side of the Page Form Here */}
        <div className="form-wrap">
          <form className="post-form">
            <input
              className="itemName-input-bar"
              value={this.state.firstName}
              name="itemName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Item Name"
            />
            <input
              className="image-input-bar"
              value={this.state.lastName}
              name="img"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Image URL"
            />
            <input
              className="lookingFor-input-bar"
              value={this.state.lookingFor}
              name="lookingFor"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Willing to exchange for..."
            />
            <input
              className="details-input-bar"
              value={this.state.lastName}
              name="details"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Item Details"
            />
            <br />
            <button className="form-button" onClick={(event) => 
              event.preventDefault(), this.handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>


        {/* Live Item Preview */}
        <div className="preview-wrap">
            <h1 className="preview-text"> Item Preview</h1>
          <div className="item-display-wrap">
            <div className="image-wrap">
              <img
                className="item-image"
                src={previewImage}
                alt="item-display-preview"
              />
            </div>
            <h3 className="item-name"> {this.state.itemName} </h3>
            <p className="item-owner"> Item Owner: {this.props.user} </p>
          </div>
        </div>


      </div>
    );
  }
}

export default PostForm;
