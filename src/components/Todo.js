import React from "react";

export default function Todo({ task }) {
  return (
    <div style={{ display: "flex" }}>
      <li>{task}</li>
      <button>EDIT</button>
      <button>X</button>
    </div>
  );
}
