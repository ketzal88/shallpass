import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home";
import { LLCLandings } from "./pages/LLCLanding";
import { Thanks } from "./pages/Thanks";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llc" element={<LLCLandings />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
