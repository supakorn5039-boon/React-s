import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar({ setData }) {
  const [s, setS] = useState(0);
  const handleClick = () => {
    setS(s + 1);
  };


  return (
    <div>
    {
      s > 5 ? :
    }

      <button onClick={() => handleClick()}>Click</button>
      {s}
    </div>
  );
}
