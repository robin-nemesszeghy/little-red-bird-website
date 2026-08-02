import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import DarkSpeculations from "./DarkSpeculations";
import Contact from "./Contact";
import Affiliates from "./Affiliates"; // <-- Newly imported Affiliates page!

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50">
        {/* Global Navbar */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/dark-speculations" element={<DarkSpeculations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/affiliates" element={<Affiliates />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
