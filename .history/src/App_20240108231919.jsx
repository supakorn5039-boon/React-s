export default function App() {


  function sum(a,b){
    var c = a+b
    return c
  }


  const name = "Boon";
  console.log(name);
  return (
    <h1>
      Hello :
      <br />
      {sum(1,2)}
    </h1>
  );
}
