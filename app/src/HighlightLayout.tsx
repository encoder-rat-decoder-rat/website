import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function HighlightLayout() {
  return (
    <div id="highlighted-layout">
      <Outlet />
      <footer id="highlighted-footer">
        <Link to="/">Home</Link> ERDR © UET{Date.now()}
      </footer>
    </div>
  );
}
