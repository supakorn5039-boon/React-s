export default function App() {
  function Navbar() {
    return (
      <>
        <h1>Navbar</h1>
        <h1>Footer</h1>
      </>
    );
  }

  const Story = () => {
    return <>
      <h1>Hello Footer</h1>
    </>
  }

  return (
    <h1>
      Hello 
      <Navbar />
    </h1>
  );
}
