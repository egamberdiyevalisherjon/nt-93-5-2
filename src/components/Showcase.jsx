import React from "react";
import { Link } from "react-router-dom";

function Showcase() {
  return (
    <section
      id="showcase"
      className="text-bg-light min-vh-100 d-flex align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-1">Wakanda</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              nam. A natus, itaque, quibusdam alias nulla voluptas voluptatibus
              est temporibus neque odio voluptate? Non dolor ut eos ipsa dolores
              voluptatum!
            </p>
            <Link className="btn btn-outline-primary" to="/about">
              About us
            </Link>
            <Link className="btn btn-success ms-3" to="/contact">
              Contact us
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.deccanherald.com/sites/dh/files/p1-1172377-1671192779.png"
              alt="Wakanda"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
