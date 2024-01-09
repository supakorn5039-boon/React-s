import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";

export default function App() {
  return (
    <h1>
      Hello
      <Navbar text="Nebula Dev" />
      <hr />
      <TableContent />
    </h1>
  );
}
