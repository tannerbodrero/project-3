import React from "react";
import "./item.css";
import { useSpring, animated } from "react-spring";

function Item(props) {

const fade = useSpring({ config : {duration: 1500},
  from: {opacity:0}, to: {opacity:1},
});
  return (
    <animated.div 
      style={fade}
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
    </animated.div>
  );
}

export default Item;
