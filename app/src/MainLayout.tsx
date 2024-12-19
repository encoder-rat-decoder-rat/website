import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Logo from "./components/Logo.js"

export default function Main() {
  return (
    <div>
      <header id="header">
        <Link to="/">
          <Logo />
        </Link>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer id="footer">ERDR © UET{Date.now()}</footer>
    </div>
  )
}