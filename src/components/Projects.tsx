import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      description:
        "A comprehensive e-commerce platform that transformed online retail for a leading fashion brand. Built with scalability in mind, featuring real-time inventory management, personalized recommendations, and seamless checkout experience.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      stats: { users: "2M+", conversion: "+145%", rating: "4.9/5" },
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description:
        "Powerful SaaS analytics platform providing real-time insights for enterprise clients. Features include customizable dashboards, advanced data visualization, automated reporting, and predictive analytics powered by machine learning.",
      tags: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      stats: { clients: "500+", dataPoints: "1B+", uptime: "99.9%" },
    },
    {
      id: 3,
      title: "Fitness Companion App",
      description:
        "Award-winning mobile application that reimagines personal fitness. Combines AI-powered workout recommendations, social features, and health tracking in one seamless experience. Featured in App Store's Best of 2024.",
      tags: ["React Native", "Firebase", "TensorFlow", "Redux"],
      stats: { downloads: "500K+", rating: "4.8/5", retention: "78%" },
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {projects.map((project, index) => (
          <article key={project.id} className="project-item">
            <div className="project-visuals">
              <div className="device-mockup desktop">
                <div className="device-screen">
                  <div className="placeholder-content">
                    <div className="placeholder-header"></div>
                    <div className="placeholder-body">
                      <div className="placeholder-line"></div>
                      <div className="placeholder-line"></div>
                      <div className="placeholder-line short"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="device-mockup mobile">
                <div className="device-screen">
                  <div className="placeholder-content mobile-content">
                    <div className="placeholder-circle"></div>
                    <div className="placeholder-line"></div>
                    <div className="placeholder-line short"></div>
                  </div>
                </div>
              </div>
              <div className="project-number">0{project.id}</div>
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-stats">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="stat-item">
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">{key}</div>
                  </div>
                ))}
              </div>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="view-case-study">
                View Case Study
                <span className="arrow">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
      <style>{`
        .projects {
          padding: 8rem 2rem !important;
          max-width: 1400px;
          margin: 0 auto;
        }

        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 12rem;
        }

        .project-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .project-item:nth-child(1) {
          animation-delay: 0.2s;
        }

        .project-item:nth-child(2) {
          animation-delay: 0.4s;
        }

        .project-item:nth-child(3) {
          animation-delay: 0.6s;
        }

        .project-visuals {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .device-mockup {
          position: absolute;
          border-radius: 16px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .device-mockup.desktop {
          width: 480px;
          height: 320px;
          background: linear-gradient(135deg, #1E3E62 0%, #0B192C 100%);
          border: 8px solid #000;
          left: 0;
          z-index: 1;
        }

        .device-mockup.mobile {
          width: 180px;
          height: 360px;
          background: linear-gradient(135deg, #1E3E62 0%, #0B192C 100%);
          border: 10px solid #000;
          border-radius: 24px;
          right: 40px;
          z-index: 2;
        }

        .project-item:hover .device-mockup.desktop {
          transform: translateX(-10px) translateY(-10px);
        }

        .project-item:hover .device-mockup.mobile {
          transform: translateX(10px) translateY(10px);
        }

        .device-screen {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(30, 62, 98, 0.3) 0%, rgba(11, 25, 44, 0.8) 100%);
          border-radius: 8px;
          padding: 1.5rem;
          overflow: hidden;
        }

        .device-mockup.mobile .device-screen {
          border-radius: 16px;
          padding: 1rem;
        }

        .placeholder-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
        }

        .placeholder-header {
          width: 60%;
          height: 24px;
          background: linear-gradient(90deg, rgba(255, 101, 0, 0.3), rgba(255, 165, 89, 0.3));
          border-radius: 4px;
        }

        .placeholder-body {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex: 1;
        }

        .placeholder-line {
          width: 100%;
          height: 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .placeholder-line.short {
          width: 70%;
        }

        .mobile-content {
          align-items: center;
          text-align: center;
        }

        .placeholder-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 101, 0, 0.3), rgba(255, 165, 89, 0.3));
          margin-bottom: 1rem;
        }

        .project-number {
          position: absolute;
          top: -40px;
          left: -20px;
          font-size: 10rem;
          font-weight: 900;
          color: rgba(255, 101, 0, 0.08);
          z-index: 0;
          line-height: 1;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .project-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #FFA559;
          margin: 0;
          line-height: 1.2;
        }

        .project-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .project-stats {
          display: flex;
          gap: 2rem;
          padding: 1.5rem 0;
          border-top: 2px solid rgba(255, 101, 0, 0.2);
          border-bottom: 2px solid rgba(255, 101, 0, 0.2);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .stat-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: #FF6500;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: capitalize;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .project-tag {
          background: rgba(255, 101, 0, 0.15);
          color: #FFA559;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(255, 101, 0, 0.3);
        }

        .view-case-study {
          width: fit-content;
          padding: 1rem 2rem;
          background: transparent;
          border: 2px solid #FF6500;
          color: #FF6500;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: none;
        }

        .view-case-study .arrow {
          transition: transform 0.3s ease;
        }

        .view-case-study:hover {
          background: rgba(255, 101, 0, 0.1);
          border-color: #FFA559;
          transform: translateY(-2px);
        }

        .view-case-study:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 1024px) {
          .projects {
            padding: 4rem 2rem !important;
          }

          .projects-container {
            gap: 8rem;
          }

          .project-item {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .project-visuals {
            height: 400px;
          }

          .device-mockup.desktop {
            width: 400px;
            height: 280px;
          }

          .device-mockup.mobile {
            width: 150px;
            height: 300px;
            right: 20px;
          }

          .project-number {
            font-size: 8rem;
          }

          .project-title {
            font-size: 2rem;
          }

          .project-stats {
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .projects {
            padding: 3rem 1.5rem !important;
          }

          .projects-container {
            gap: 6rem;
          }

          .project-visuals {
            height: 350px;
          }

          .device-mockup.desktop {
            width: 280px;
            height: 200px;
            left: -20px;
          }

          .device-mockup.mobile {
            width: 120px;
            height: 240px;
            right: 0;
          }

          .project-number {
            font-size: 6rem;
            top: -30px;
            left: -10px;
          }

          .project-title {
            font-size: 1.8rem;
          }

          .project-description {
            font-size: 1rem;
          }

          .project-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .stat-value {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
