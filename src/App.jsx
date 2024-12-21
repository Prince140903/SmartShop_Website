import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import Home from "./pages/Home/home.jsx";
import About from "./pages/About/about.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
