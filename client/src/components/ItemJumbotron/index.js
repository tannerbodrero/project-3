import React from "react";

function ItemJumbotron({ children }) {
    return (
      <div
        style={{ height: "auto", width: "auto", clear: "both", marginLeft: 100, marginRight: 100,  textAlign: "center" }}
        className="jumbotron"
      >
        {children}
      </div>
    );
  }

export default ItemJumbotron;