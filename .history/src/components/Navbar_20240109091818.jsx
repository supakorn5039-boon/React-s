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

  return (<>

    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  </>
  );
}
