import React from "react";

function SaveBtn(props) {
  return (
    <button className="save-btn" {...props} tabIndex="0">
      Save Book
    </button>
  );
}

export default SaveBtn;
