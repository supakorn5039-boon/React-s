export default function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  return (
    <div>
      Navbar
      <button onClick={props.handleShow}>Click</button>
      {props.text}
    </div>
  );
}
