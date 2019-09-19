import React from "react";

// This file exports the Input, TextArea, and FormBtn components

//Form elements for splash page

export function Input(props) {
  
  return (
    <div className="form-group">
      <input id="results" className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}    
      
      
    </button>
    
  );
}

export function SplashBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-secondary">
      {props.children}    
      
      
    </button>
    
  );
}