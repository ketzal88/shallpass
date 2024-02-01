import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

import "./App.scss";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home";
import { LLCLandings } from "./pages/LLCLanding";
import { Thanks } from "./pages/Thanks";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container fluid className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llc" element={<LLCLandings />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
