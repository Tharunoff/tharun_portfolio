// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spotlight from "./components/Spotlight";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projectarchive from "./components/Projectarchive";
import Certificates from "./components/Certificates"; // 👈 NEW IMPORT

// Homepage layout
const HomePage = () => (
  <>
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="w-full h-px bg-[#233554]" />
    </main>
    <Footer />
  </>
);

// App Router
function App() {
  return (
    <Router>
      <div className="relative bg-[#0a192f] text-white overflow-x-hidden min-h-screen">
        {/* 🔆 Spotlight background on all routes */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Spotlight />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<Projectarchive />} />
          <Route path="/certificates" element={<Certificates />} /> {/* 👈 NEW ROUTE */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
