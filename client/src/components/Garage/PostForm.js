import React from "react";
import "../Item/item.css";
import "./PostForm.css";

class PostForm extends React.Component {
  state = {
    itemName: "",
    owner: "",
    img: 0,
    details: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    // grab current states and create item
  };

  render(props) {

    const previewImage = this.state.img || "/public/box3.png"

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
              name="image"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Image URL"
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
            <button className="form-button" onClick={() => this.handleFormSubmit}>
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
