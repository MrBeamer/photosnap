import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./Pages/home/Home.jsx";
import Stories from "./Pages/stories/Stories.jsx";
import Features from "./Pages/features/Features.jsx";
import Pricing from "./Pages/pricing/Pricing.jsx";

function App() {
  return (
    <div className="App">
      <Header>
        <Navbar />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
