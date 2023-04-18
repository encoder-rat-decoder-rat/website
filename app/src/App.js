import { BrowserRouter, Route, Routes } from "react-router-dom";

// Style
import "normalize.css";
import "source-code-pro/source-code-pro.css";
import "./app.css";

// Pages
import MainLayout from "./MainLayout.js";
import HighlightLayout from "./HighlightLayout.js";
import Home from "./pages/Home.mdx";
import GenderGenerator from "./pages/GenderGenerator.mdx";
import Orfelia from "./pages/Orfelia/OrfeliaPage.js";

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
          <Route path="orfelia" element={<Orfelia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
