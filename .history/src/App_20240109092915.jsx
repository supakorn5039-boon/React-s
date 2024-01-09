import { useState } from "react";
import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState("Supakorn");
  var name = "Boon";

  const handleShow = () => {
    console.log("Click");
  };

  return (
    <h1>
      <Navbar text={name} handleShow={handleShow} setData={setData} />
      <hr />
      <Card
        content={"Hello NEBULA"}
        title={"MERN STACK"}
        url={
          "https://res.cloudinary.com/jerrick/image/upload/v1686746377/6489b5098c7613001d75ed10.png"
        }
      />
      <hr />
      <TableContent data={data} />
    </h1>
  );
}
