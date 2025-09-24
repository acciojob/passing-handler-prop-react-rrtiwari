import React from "react";

function Selection({ selectedColor }) {
  return (
    <div
      className="fix-box"
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: selectedColor,
        border: "1px solid black",
        margin: "10px",
        cursor: "pointer"
      }}
      data-testid="selection-box"
    ></div>
  );
}

export default Selection;




