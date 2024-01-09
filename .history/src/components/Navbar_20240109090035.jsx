import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar({ setData }) {
  const [show, setShow] = useState(false);

  const [s, setS] = useState([
    { name: "boon", detail: "msi" },
    { name: "Supakorn", detail: "coding" },
  ]);
  const handleClick = () => {
    setS(s + 1);
    setShow(true);
    if (show === true) {
      alert("555+");
    }
  };

  return (
    <div>
      <ul>
        {s.map(() => (
          <h1> {item.name} </h1>
        ))}
      </ul>
      <button onClick={() => handleClick()}>Click</button>
      {s}
    </div>
  );
}
