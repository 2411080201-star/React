function ProjectsSection() {
  const projects = [
    {
      title: "Dashboard",
      description:
        "Panel en tiempo real con visualización de CRUD DE LISTA DE CLIENTES",
      demo: "http://localhost/VENTAS/login.php",
      code: "https://github.com/tuusuario/tu-repo",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Proyectos</h2>
        <div className="section-underline" />
        <p className="section-description">
          Aquí están algunos de mis proyectos destacados. Cada uno representa mi
          evolución como desarrolladora y mi capacidad para crear soluciones
          innovadoras y funcionales.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card large">
              <div className="project-image-placeholder">
                <img
                  src="public/dashboard.png"
                  alt="Dashboard Analítico - Vista referencial"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-actions">
                  <a
                    className="btn-outline"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Demo
                  </a>

                  <a
                    className="btn-primary-outline"
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
