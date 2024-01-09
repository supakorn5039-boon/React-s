/* eslint-disable react/prop-types */
export default function Navbar(props) {
  return (
    <div>
      <button onClick={props.handleShow}>Click</button>
      {props.text}
    </div>
  );
}
