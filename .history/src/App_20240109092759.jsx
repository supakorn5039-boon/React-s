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
        url={
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A700%2F0*9-j7IwQsJ4ft1p-o.jpg&tbnid=AdZiQRX3FTJiUM&vet=12ahUKEwie6c3coM-DAxUHkGMGHdrLDw0QMygHegQIARBX..i&imgrefurl=https%3A%2F%2Fmedium.com%2F%40boatbrown_73259%2Fmern-stack-%25E0%25B8%2584%25E0%25B8%25B7%25E0%25B8%25AD%25E0%25B8%25AD%25E0%25B8%25B0%25E0%25B9%2584%25E0%25B8%25A3-mern-ep-1-95b4c312af0e&docid=bJ0qim64LCIFjM&w=700&h=366&q=mern%20stack%20%E0%B8%84%E0%B8%B7%E0%B8%AD&ved=2ahUKEwie6c3coM-DAxUHkGMGHdrLDw0QMygHegQIARBX.png"
        }
      />
      <hr />
      <TableContent data={data} />
    </h1>
  );
}
