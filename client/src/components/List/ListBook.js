import React from "react";

  export function ListBook(props) {
    return <li className="list-group-item">
      <h3> {props.title}</h3>
      <h5>{props.authors}</h5>
      <img src={props.image} alt="title"></img>
      <br></br><br></br>
      {props.children}
    </li>;
  }
