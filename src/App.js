import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Home } from "./pages/Home";
import { LLCLandings } from "./pages/LLCLanding";
import { Thanks } from "./pages/Thanks";
import "./App.scss";

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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Container>
  );
}

export default App;
