import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button className="delete-btn" {...props} tabIndex="0">
      Delete Book 
    </button>
  );
}

export default DeleteBtn;
