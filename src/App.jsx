import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import { Home, About, Listing } from "./pages";
// import { Home, About } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/about" element={<About />} />
        <Route exact={true} path="/listing" element={<Listing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
