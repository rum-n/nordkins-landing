import React from "react";
import { useTranslation } from "../i18n/useTranslation";
import bv from "../assets/bv.png";
import df from "../assets/df.jpeg";
import vrd from "../assets/vrd.png";
import rjm from "../assets/rjm.png";
import devf from "../assets/devf.png";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t.projects.vrd.title,
      description: t.projects.vrd.description,
      image: vrd,
      link: "https://vrd.de",
    },
    {
      id: 2,
      title: t.projects.bv.title,
      description: t.projects.bv.description,
      image: bv,
      link: "https://brightvision.com",
    },
    {
      id: 3,
      title: t.projects.df.title,
      description: t.projects.df.description,
      image: df,
    },
  ];

  const internalProjects = [
    {
      id: 1,
      title: t.projects.rjm.title,
      description: t.projects.rjm.description,
      image: rjm,
      link: "https://remotejobmatching.com",
    },
    {
      id: 2,
      title: t.projects.devf.title,
      description: t.projects.devf.description,
      image: devf,
      link: "https://devjobflashcards.com",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">{t.projects.clientTitle}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.link}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <h2 className="projects-title">{t.projects.internalTitle}</h2>
      <div className="projects-grid">
        {internalProjects.map((project) => (
          <div key={project.id} className="internal-project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.link}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .projects {
          padding: 2rem 0rem;
          margin: 0 auto;
        }

        .projects-title {
          font-size: 2rem;
          font-weight: 600;
          color: var(--color-text);
          margin: 0 0 2rem 0;
          text-align: left;
        }

        @media (max-width: 768px) {
          .projects-title {
            font-size: 1.2rem;
            margin: 0 0 1rem 0;
          }
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

         .project-card, .internal-project-card {
           border-radius: 2px;
           transition: transform 0.3s ease;
         }

         .project-card:hover, .internal-project-card:hover {
           transform: scale(1.02);
         }

         /* Funky colors for client projects */
         .project-card:nth-child(1) {
           background: #E49FA4;
         }

         .project-card:nth-child(2) {
           background: #B2ADAB;
         }

         .project-card:nth-child(3) {
           background: #4DA555;
         }

         .project-card:nth-child(4) {
           background: #95E1D3;
         }

         .project-card:nth-child(5) {
           background: #C7CEEA;
         }

         .project-card:nth-child(6) {
           background: #FF9A76;
         }

         /* Funky colors for internal projects */
         .internal-project-card:nth-child(1) {
           background: #CCF7D7;
         }

         .internal-project-card:nth-child(2) {
           background: #ED7470;
         }

         .internal-project-card:nth-child(3) {
           background: #6BCB77;
         }

         .internal-project-card:nth-child(4) {
           background: #FF6B6B;
         }

         .internal-project-card:nth-child(5) {
           background: #4D96FF;
         }

         .internal-project-card:nth-child(6) {
           background: #FDA7DF;
         }

        .project-image {
          width: 100%;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-text);
        }

        .project-image img {
          width: 90%;
          height: 90%;
          object-fit: contain;
        }

        .project-info {
          padding: 0.8rem;
        }

        .project-title {
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--color-bg);
          margin: 0 0 0.5rem 0;
        }

        .project-description {
          font-size: 0.8rem;
          color: var(--color-bg);
          margin: 0;
          line-height: 1.5;
          font-family: monospace;
        }

        .project-link {
          text-decoration: none;
          color: var(--color-bg);
          font-size: 0.8rem;
          font-family: monospace;
          cursor: pointer;
        }

        .project-link:hover {
          color: var(--color-text);
        }

        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .projects {
            padding: 4rem 2rem;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 600px) {
          .projects {
            padding: 3rem 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-image {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
