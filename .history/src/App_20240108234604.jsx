import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";

export default function App() {
  var name = 
  return (
    <h1>
      Hello
      <Navbar text={name} />
      <hr />
      <TableContent />
    </h1>
  );
}
