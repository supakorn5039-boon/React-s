import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar(props) {
  
  
  const [n] = useState('Sub')


  return (
    <div>
      <button onClick={props.handleShow}>Click</button>
      {props.text}
    </div>
  );
}
