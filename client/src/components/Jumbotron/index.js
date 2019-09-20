import React from "react";

export function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export function ItemJumbotron({ children }) {
  return (
    <div
      style={{ height: "auto", width: "auto", clear: "both", marginLeft: 100, marginRight: 100,  textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}


