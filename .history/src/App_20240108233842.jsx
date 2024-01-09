import Navbar from "./components/Navbar";

export default function App() 

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
