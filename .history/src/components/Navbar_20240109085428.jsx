import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar({ setData }) {
  const [s, setS] = useState(0);

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setS(s + 1);
    setTrue
    if (show === true) {
      alert("555+");
    }
  };

  return (
    <div>
      {s == true ? "true " : "false"}

      <button onClick={() => handleClick()}>Click</button>
      {s}
    </div>
  );
}
