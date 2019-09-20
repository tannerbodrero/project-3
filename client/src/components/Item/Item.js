import React from "react";
import "./item.css";

function Item(props) {
  return (
    <div
      className="item-display-wrap"
      id={props.id}
      onClick={() => props.handleClicked(props.id)}
    >
      <div className="image-wrap">
        <img className="item-image" src={props.img} alt="item-image" />
      </div>
      
      <h3 className="item-name"> {props.name} </h3>
      <p className="item-owner"> Item Owner: {props.postedBy} </p>
      {/* <p className="item-details"> Details: {props.details} </p> */}
    </div>
  );
}

export default Item;
