import React from "react";
import "../Item/item.css";
import "./PostForm.css";
import axios from "axios";
import API from "../../utils/API";
import $ from "jquery";

class PostForm extends React.Component {
  state = {
    itemName: "",
    owner: "",
    details: "",
    lookingFor: "",
    img: "https://vignette.wikia.nocookie.net/hellraiser/images/2/2b/Box.png/revision/latest?cb=20160204114708",
    // selectedFile: null,
    // selectedFiles: null
  };

  // Live updating to state
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//   singleFileUploadHandler = (event) => {
//     const data = new FormData();
//     // If file selected
//     if (this.state.selectedFile) {
//       data.append('itemImage', this.state.selectedFile, this.state.selectedFile.name);
//       axios.post('/api/items/items-img-upload', data, {
//         headers: {
//           'accept': 'application/json',
//           'Accept-Language': 'en-US,en;q=0.8',
//           'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
//         }
//       })
//         .then((response) => {
//           if (200 === response.status) {
//             // If file size is larger than expected.
//             if (response.data.error) {
//               if ('LIMIT_FILE_SIZE' === response.data.error.code) {
//                 this.ocShowAlert('Max size: 2MB', 'red');
//               } else {
//                 console.log(response.data);
//                 // If not the given file type
//                 this.ocShowAlert(response.data.error, 'red');
//               }
//             } else {
//               // Success
//               let fileName = response.data;
//               console.log('filedata', fileName);
//               this.ocShowAlert('File Uploaded', '#3089cf');
//             }
//           }
//         }).catch((error) => {
//           // If another error
//           this.ocShowAlert(error, 'red');
//         });
//     } else {
//       // if file not selected throw error
//       this.ocShowAlert('Please upload file', 'red');
//     }
//   };

//   // ShowAlert Function
//  ocShowAlert = ( message, background = '#3089cf' ) => {
//   let alertContainer = document.querySelector( '#oc-alert-container' ),
//    alertEl = document.createElement( 'div' ),
//    textNode = document.createTextNode( message );
//   alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
//   $( alertEl ).css( 'background', background );
//   alertEl.appendChild( textNode );
//   alertContainer.appendChild( alertEl );
//   setTimeout( function () {
//    $( alertEl ).fadeOut( 'slow' );
//    $( alertEl ).remove();
//   }, 3000 );
//  };


  handleFormSubmit = event => {
    event.preventDefault();
    // this.singleFileUploadHandler();
    // console.log("hello world")
    
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

  // singleFileChangedHandler = (event) => {
  //   this.setState({
  //     selectedFile: event.target.files[0]
  //   });
  // };


  render(props) {

    const previewImage = this.state.img || "/public/box3.png";

    return (
      <div className="form-component">

        {/* Left side of the Page Form Here */}
        <div className="form-wrap">
          {/* For Alert box*/}
          {/* <div id="oc-alert-container"></div> */}
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
            <button className="btn btn-info form-button" onClick={(event) => 
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