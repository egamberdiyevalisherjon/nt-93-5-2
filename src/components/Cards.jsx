import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://m.economictimes.com/thumb/msid-96718321,width-1200,height-900,resizemode-4,imgsize-122150/black-panther-wakanda-forever-see-when-where-to-watch-movie-on-ott.jpg"
        alt="The One"
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Wakanda Forever</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          repellat iste quaerat amet unde quis sint quod velit ducimus fuga
          laboriosam provident, molestias pariatur quia neque ipsam eveniet,
          corrupti nihil?
        </p>
      </div>
      <div className="card-footer">
        <div className="row g-3">
          <div className="col-6">
            <Link to="/about" className="btn w-100 btn-outline-primary">
              About
            </Link>
          </div>
          <div className="col-6">
            <Link to="/contact" className="btn w-100 btn-success">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <section id="cards" className="py-5">
      <div className="container">
        <h2 className="display-4 text-light">Movies</h2>
        <div className="row g-5">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
