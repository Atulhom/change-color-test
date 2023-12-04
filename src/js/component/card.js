import React from "react";

function Card(params) {
  function like(params) {
    alert("me gusta");
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary" onClick={like}>
          Go somewhere
        </a>
      </div>
    </div>
  );
}

// style={{width: "18rem"}}>
export default Card;
