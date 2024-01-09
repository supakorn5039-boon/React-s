export default function App() {
  function sum(a, b) {
    var c = a + b;
    return c;
  }

  const show = () => {
    console.log("Hello");
    return <h1>5555</h1>;
  };
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
