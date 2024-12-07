import { BrowserRouter, Route, Routes } from "react-router-dom";

// Style
import "normalize.css";
import "source-code-pro/source-code-pro.css";
import "./app.css";

// Pages
import MainLayout from "./MainLayout.js";
import HighlightLayout from "./HighlightLayout.js";
import Home from "./pages/Home.js";
import GenderGenerator from "./pages/GenderGenerator.js";
import OrfeliaLayout from "./pages/Orfelia/Layout.js";
import Messsy from "./pages/Orfelia/Messsy.js";
import OrfeliaAbout from "./pages/Orfelia/About.js";
import OrfeliaHome from "./pages/Orfelia/Home.js";
import OrfeliaGallery from "./pages/Orfelia/Gallery.js";
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
            <Route path="" element={<OrfeliaHome />} />
            <Route path="about" element={<OrfeliaAbout />} />
            <Route path="gallery" element={<OrfeliaGallery />} />
            <Route path="messsy" element={<Messsy />} />
          </Route>
          <Route
              path="messsytix"
              element={<Redirect url="https://ra.co/events/1781520?p=poster" />}
          />
          <Route
              path="messytix"
              element={<Redirect url="https://ra.co/events/1781520?p=poster" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
