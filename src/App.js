import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
