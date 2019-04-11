import React from "react";

function Jumbotron({ children }) {
  return (
    <div 
      style={{ height: 250, marginTop: 25,  textAlign: "center" }}
      className={"jumbotron text-white display-4 bg-danger"}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
