import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar({ setData }) {
  const [sub, setSub] = useState();

  const handleClick = () => {
    setData("5555+");
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Click</button>
      {sub}
    </div>
  );
}
