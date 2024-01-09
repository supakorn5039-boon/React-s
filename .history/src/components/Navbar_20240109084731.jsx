import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar({ setData }) {
  const [sub, setSub] = useState();

  const handleClick = () => {
    serData('5555+')
  }

  return (
    <div>
      <button onClick={() => setData("555+")}>Click</button>
      {sub}
    </div>
  );
}
