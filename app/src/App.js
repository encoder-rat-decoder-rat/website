import { BrowserRouter, Route, Routes } from "react-router-dom";

// Style
import 'normalize.css';
import 'source-code-pro/source-code-pro.css'
import './app.css';

// Pages
import Main from './Main.js';
import Home from './pages/Home.mdx';
import GenderGenerator from './pages/GenderGenerator.mdx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/projects">
            <Route path="gender-generator" element={<GenderGenerator />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}