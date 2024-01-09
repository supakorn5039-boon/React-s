import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar({ setData }) {
  const [sub, setSub] = useState(0);
  const handleClick = () => {
    setSub();
  };

  




  return (
    <div>
      <button onClick={() => handleClick()}>Click</button>
      {sub}
    </div>
  );
}
