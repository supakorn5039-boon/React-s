import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar({ setData }) {
  const [s, setS] = useState(0);
  const handleClick = () => {
    setS(sub+1);
  };

  




  return (
    <div>
      <button onClick={() => handleClick()}>Click</button>
      {sub}
    </div>
  );
}
