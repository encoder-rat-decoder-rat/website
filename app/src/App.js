import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Style
import "normalize.css";
import "source-code-pro/source-code-pro.css";
import "./app.css";

// Pages
import MainLayout from "./MainLayout.js";
import HighlightLayout from "./HighlightLayout.js";
import Home from "./pages/Home.mdx";
import GenderGenerator from "./pages/GenderGenerator.mdx";
import OrfeliaLayout from "./pages/Orfelia/OrfeliaPage.js";
import Messsy from "./pages/Orfelia/Messsy.mdx";
import OrfeliaContent from "./pages/Orfelia/OrfeliaContent.mdx";
import Redirect from "./components/Redirect.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects">
            <Route path="gender-generator" element={<GenderGenerator />} />
          </Route>
        </Route>
        <Route path="/" element={<HighlightLayout />}>
          <Route path="/orfelia" element={<OrfeliaLayout />}>
            <Route path="" element={<OrfeliaContent />} />
            <Route path="messsy" element={<Messsy />} />
          </Route>
          <Route
              path="messsytix"
              element={<Redirect url="https://ra.co/events/1781520" />}
          />
          <Route
              path="messytix"
              element={<Redirect url="https://ra.co/events/1781520" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
