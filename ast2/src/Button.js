import React from "react";

export default function Button({ onClick, content }) {
  const ButtonStyle = {
    height: "50px",
    width: "50px",
    margin: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "30px",
    textAlign: "center",
  };

  return (
    <button style={ButtonStyle} onClick={onClick}>
      {content}
    </button>
  );
}
