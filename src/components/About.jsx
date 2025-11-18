import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* FOTO */}
        <div className="about-photo">
          <img src="/FOTO.jpg" alt="Alondra" />
        </div>

        {/* TEXTO */}
        <div className="about-info">
          <h2 className="about-title">Sobre mí</h2>

          <p className="about-text">
            ¡Hola! Soy <span className="highlight">ALONDRA SM</span>, una
            desarrolladora apasionada por crear experiencias digitales modernas,
            rápidas y funcionales.
          </p>

          <p className="about-text">
            Actualmente estudio Ingeniería de Sistemas y desarrollo proyectos web
            para negocios locales, instituciones y emprendimientos.
          </p>

          <div className="skills">
            <span>⚛️ React</span>
            <span>🟢 Node.js</span>
            <span>💾 MySQL</span>
            <span>🎨 UI/UX</span>
            <span>⚡ Vite</span>
          </div>

          <button className="btn-cv">Descargar CV</button>
        </div>
      </div>
    </section>
  );
}

export default About;
