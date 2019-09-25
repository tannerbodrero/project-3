import React from "react";
import "./item.css";

function Item(props) {
  // console.log(props);
  return (
    <div
      className="item-display-wrap"
      id={props._id}
      onClick={() => props.handleClicked(props.id)}
    >
      <div className="image-wrap">
        <img className="item-image" src={props.img} alt="item-display" />
      </div>
      
      <h3 className="item-name"> {props.name} </h3>
      <p className="item-owner"> Item Owner: {props.postedBy} </p>
      {/* <p className="item-details"> Details: {props.details} </p> */}
    </div>
  );
}

export default Item;
