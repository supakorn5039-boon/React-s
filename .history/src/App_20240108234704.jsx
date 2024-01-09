import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";

export default function App() {
  var name = "Boon";

  const handleShow = () => {
    
  }
  return (
    <h1>
      Hello
      <Navbar text={name} />
      <hr />
      <TableContent />
    </h1>
  );
}
