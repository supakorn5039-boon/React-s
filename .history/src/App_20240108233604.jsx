export default function App() {
  function Navbar() {
    return (
      <>
        <h1>Navbar</h1>
      </>
    );
  }

  const Story = () => {
    return (
      <>
        <h1>Hello Story</h1>
      </>
    );
  };

  return (
    <h1>
      Hello
      <Navbar />
      <Story />
    </h1>
  );
}
