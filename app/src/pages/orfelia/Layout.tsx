import React from "react";
import { Outlet, Link } from "react-router-dom";
import messsyLogo from "../../images/messsy-logo.svg";
import orfeliaLogo from "../../images/orfelia-logo.png";

const OrfeliaLayout: React.FC = () => {
  return (
    <div id="orfelia-page">
      <header className="container page-header">
        <Link to="/orfelia">
          <img src={orfeliaLogo} className="orfelia-logo" alt="Orfelia Logo" />
        </Link>
        <nav> 
          <Link to="/orfelia/about">
            About
          </Link>
          <Link to="/orfelia/gallery">
            Gallery
          </Link>
          <Link to="/orfelia/messsy">
            <img src={messsyLogo} alt="Messsy" className="messsy-logo" />
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default OrfeliaLayout;
