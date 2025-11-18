function ProjectsSection() {
  const projects = [
    {
      title: "Tienda E-commerce",
      description:
        "Aplicación de comercio electrónico con carrito de compras, pasarela de pago y panel de usuario.",
    },
    {
      title: "Dashboard Analítico",
      description:
        "Panel en tiempo real con visualización de métricas, gráficos interactivos y filtros avanzados.",
    },
    {
      title: "Sistema de Reservas",
      description:
        "Gestión de reservas con calendario, notificaciones y control de disponibilidad.",
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
            <article key={project.title} className="project-card">
              <div className="project-image-placeholder" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-actions">
                  <button className="btn-outline">Ver Demo</button>
                  <button className="btn-primary-outline">Código</button>
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

