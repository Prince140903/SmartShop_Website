import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components";
import Home from "./pages/Home/home.jsx";
import About from "./pages/About/about.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
