/* eslint-disable react/prop-types */
export default function Navbar(props) {
  cosnt [name, setName ]
  return (
    <div>
      <button onClick={props.handleShow}>Click</button>
      {props.text}
    </div>
  );
}
