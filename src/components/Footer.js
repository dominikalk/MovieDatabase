import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small bg-dark mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-4">
            <div className="flex-center">
              <a
                className="fb-ic"
                href="https://github.com/dominikalk"
                target="_blank"
              >
                <i className="fab fa-github fa-3x white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a
                className="tw-ic"
                href="https://dominikalk.itch.io/"
                target="_blank"
              >
                <i className="fab fa-itch-io fa-3x white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
