import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";

export default function App() {
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
