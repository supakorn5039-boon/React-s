import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar() {
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
        {s.map((item, index) => (
          <li key={index}>
            {" "}
            {item.name} : {item.detail}
          </li>
        ))}
      </ul>
      <button onClick={() => handleClick()}>Click</button>
      {s}
    </div>
  );
}
