import { useState } from "react";
import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState("Supakorn");

  const [obj,setObj] = useState([
  {title : 'MERN STACK' , url :'' , content:'NEBULA'}
  ])

  var name = "Boon";

  const handleShow = () => {
    console.log("Click");
  };

  return (
    <h1>
      <Navbar text={name} handleShow={handleShow} setData={setData} />
      <hr />
      
      <Card
        content={""}
        title={""}
        url={
        
        }
      />
            <hr />
      <TableContent data={data} />
    </h1>
  );
}
