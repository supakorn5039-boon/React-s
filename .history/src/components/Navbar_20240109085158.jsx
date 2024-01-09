import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar({ setData }) {
  const [s, setS] = useState(0);

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setS(s + 1);
  };

  return (
    <div>
      {s > 5 ? 555 : 666}

      <button onClick={() => handleClick()}>Click</button>
      {s}
    </div>
  );
}
