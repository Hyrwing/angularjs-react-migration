import React from "react";

export const ReactApp = ({ name, onChangeName }) => (
  <form style={{ border: "1px solid blue", padding: 16 }}>
    <p>Inside the blue box is React</p>
    <label>
      Name
      <br />
      <input
        value={name}
        onChange={e => onChangeName(e.currentTarget.value)}
      />
    </label>
  </form>
);
