export default function App() {
  function sum(a, b) {
    var c = a + b;
    return c;
  }

  const show = () => {
    console.log()
  }

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
