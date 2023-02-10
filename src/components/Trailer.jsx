import React from "react";
import { Link } from "react-router-dom";

const Trailer = () => {
  return (
    <section id="trailer" className="text-bg-info py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_Z3QKkl1WyM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md-6">
            <h2 className="display-4">Watch our new trailer</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              earum fuga. Delectus quos praesentium architecto ipsa repellendus
              sed, ex adipisci aliquid illum illo. Rem omnis facere, est
              temporibus pariatur repellendus.
            </p>
            <Link to="/about" className="btn w-100 btn-success">
              More Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailer;
