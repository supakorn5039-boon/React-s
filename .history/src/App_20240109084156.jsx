import { useState } from "react";
import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";

export default function App() {
  const [data , setData ] = useState('')

  var name = "Boon";

  const handleShow = () => {
    console.log("Click");
  };


  return (
    <h1>
      Hello
      <Navbar text={name} handleShow={handleShow} />
      <hr />
      <TableContent />
    </h1>
  );
}
