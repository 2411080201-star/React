import "./App.css";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
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

export default App;
