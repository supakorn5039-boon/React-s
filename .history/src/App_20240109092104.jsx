import { useState } from "react";
import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";


export default function App() {
  const [data, setData] = useState("Supakorn");
  var name = "Boon";

  const handleShow = () => {
    console.log("Click");
  };

  return (
    <h1>
      Hello
      <Navbar text={name} handleShow={handleShow} setData={setData} />
     <hr/>
     
      <TableContent data={data} />
    </h1>
  );
}
