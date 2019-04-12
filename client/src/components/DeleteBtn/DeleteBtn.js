import React from "react";
// this creates a delete button if want to delete book from database
function DeleteBtn(props) {
  return (
    <button className="delete-btn" {...props} tabIndex="0">
      Delete Book 
    </button>
  );
}

export default DeleteBtn;
