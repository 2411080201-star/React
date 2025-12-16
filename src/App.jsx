import "./App.css";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

function Home() {
  return (
    <div className="app">
      <div className="page-container">
        {/* NAVBAR */}
        <header className="navbar">
          <div className="navbar-logo">ALONDRA SM</div>

          <nav className="navbar-links">
            <a href="#about">Sobre mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>

            {/* NUEVO: Link para ir al dashboard */}
            <Link to="/dashboard">Dashboard</Link>
          </nav>

          <button className="btn-primary">Get Started</button>
        </header>

        {/* CONTENIDO */}
        <main>
          <About />
          <ProjectsSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

