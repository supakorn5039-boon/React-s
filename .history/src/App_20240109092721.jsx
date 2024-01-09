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
      <Card url={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fres.cloudinary.com%2Fjerrick%2Fimage%2Fupload%2Fv1686746377%2F6489b5098c7613001d75ed10.png&tbnid=j9zDxqXDLPvEIM&vet=12ahUKEwie6c3coM-DAxUHkGMGHdrLDw0QMygGegQIARBV..i&imgrefurl=https%3A%2F%2Fvocal.media%2Feducation%2Fwhat-is-the-mern-stack-introduction-and-examples-beginner-guide-in2ph0xfd&docid=cJ36CfgFWH4r7M&w=1200&h=630&q=mern%20stack%20%E0%B8%84%E0%B8%B7%E0%B8%AD&ved=2ahUKEwie6c3coM-DAxUHkGMGHdrLDw0QMygGegQIARBV'}/>
      <hr />
      <TableContent data={data} />
    </h1>
  );
}
