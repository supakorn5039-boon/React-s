import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar(props) {
  const [n] = useState("Subscribe");

  return (
    <div>
      <button onClick={props.handleShow}>Click</button>
      {n}
    </div>
  );
}
