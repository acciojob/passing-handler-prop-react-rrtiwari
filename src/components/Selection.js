import React, { useState } from "react";

function Selection({ applyColor }) {
  const [selectionStyle, setSelectionStyle] = useState({ background: "" });

  function handleClick() {
    applyColor(setSelectionStyle);
  }

  return (
    <div
      className="fix-box"
      style={{
        width: "100px",
        height: "100px",
        background: selectionStyle.background || "lightgray",
        border: "1px solid black",
        margin: "10px",
        cursor: "pointer"
      }}
      onClick={handleClick}
      data-testid="selection-box"
    ></div>
  );
}

export default Selection;



