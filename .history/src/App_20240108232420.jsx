export default function App() {
  function sum(a, b) {
    var c = a + b;
    return c;
  }

  const show = () => 
    <h1>Boon Dev</h1>;


  const name = "Boon";
  console.log(name);
  return (
    <h1>
      Hello :
      <br />
      {sum(1, 2)}
      {show()}
    </h1>
  );
}
