import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link className="text-reset text-decoration-none" to="/">
              <img className="w-50" src="/images/vite.svg" alt="Logo" />
            </Link>
          </div>
          <div className="col-md-4">
            <h2>Internal Links</h2>
            <ul className="list-unstyled fs-3 d-flex flex-column gap-3">
              <li>
                <Link className="text-reset text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-reset text-decoration-none" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-reset text-decoration-none" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <h2>Social Links</h2>
            <ul className="list-unstyled d-flex gap-5">
              <li>
                <a
                  className="text-reset text-decoration-none"
                  href="https://facebook.com"
                  target="_blank"
                >
                  <i className="fa-brands fa-2x fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  className="text-reset text-decoration-none"
                  href="https://instagram.com"
                  target="_blank"
                >
                  <i className="fa-brands fa-2x fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="text-reset text-decoration-none"
                  href="https://telegram.org"
                  target="_blank"
                >
                  <i className="fa-brands fa-2x fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5">
            <h2>Subscribe to Our Newsletter</h2>
            <form>
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="eshmat@gmail.com"
              />
              <button type="submit" className="w-100 mt-3 btn btn-danger">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
