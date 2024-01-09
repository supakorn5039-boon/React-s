import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";

export default function App() {
  var name = "Boon";
  return (
    <h1>
      Hello
      <Navbar text={name} />
      <hr />
      <TableContent />
    </h1>
  );
}
