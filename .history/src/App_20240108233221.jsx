export default function App() {
  const name = {
    id:1
  }
  function Navbar() {
    return (
      <>
        <h1>Navbar</h1>
        <h1>Footer</h1>
      </>
    );
  }

  return (
    <h1>
      Hello : {name}
      <Navbar />
    </h1>
  );
}
