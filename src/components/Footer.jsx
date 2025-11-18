function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-column">
          <h3 className="footer-title">ALONDRA SM</h3>
          <p className="footer-text">
            Transformando ideas en experiencias digitales extraordinarias.
          </p>
          <div className="footer-socials">
            <span>🌐</span>
            <span>💼</span>
            <span>📸</span>
            <span>💬</span>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-subtitle">Enlaces rápidos</h4>
          <ul className="footer-list">
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="footer-list">
            <li>📍 Cañete, San Vicente, Perú</li>
            <li>📧 correo@undc.edu.pe</li>
            <li>💬 Discord: usuario#0000</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 ALONDRA SM. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
