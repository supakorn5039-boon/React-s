export default function Card({ url , title , content}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {}}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
