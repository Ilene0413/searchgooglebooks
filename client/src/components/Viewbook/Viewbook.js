import React from "react";

export function Viewbook(props) {
  return (
    <div>
      <p>{props.description}</p>
      <a href={props.infoLink}> information can be found at {props.infoLink}</a>
    </div>
  );
}
export default Viewbook;
