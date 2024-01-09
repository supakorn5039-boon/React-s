export default function Navbar(props) {
  return (
    <div>
      // eslint-disable-next-line react/prop-types
      <button onClick={props.handleShow}>Click</button>
      {props.text}
    </div>
  );
}
