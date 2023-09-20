import React from "react";
import { Outlet, Link } from "react-router-dom";
import orfeliaLogo from "../../images/orfelia-logo.png";
import messsyLogo from "../../images/messsy-logo.svg";

const OrfeliaPage = () => {
  return (
    <div id="orfelia-page">
      <header className="container page-header">
        <Link to="/orfelia">
          <img src={orfeliaLogo} className="orfelia-logo" alt="Orfelia Logo" />
        </Link>
        <div className="events">
          <span>Upcoming:</span>
          <Link to="/orfelia/messsy">
            <img
              src={messsyLogo}
              className="messsy-logo"
              alt="Messsy at Orfelia Event Logo"
            />
          </Link>
        </div>
      </header>
      <section className="container">
        <Outlet />
      </section>
    </div>
  );
};

export default OrfeliaPage;
