import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Navbar({ setData}) {
  const [sub, setSub] = useState("Subscribe");

  return (
    <div>
      <button onClick={() => setSub("555+")}>Click</button>
      {sub}
    </div>
  );
}
