import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar(props) {
  const[(name, setName)] = useState("");
  return (
    <div>
      <button onClick={props.handleShow}>Click</button>
      {props.text}
    </div>
  );
}
