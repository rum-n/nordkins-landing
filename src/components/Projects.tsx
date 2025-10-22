import React from "react";
import bv from "../assets/bv.png";
import df from "../assets/df.jpeg";
import vrd from "../assets/vrd.png";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Landing page and salary calculator",
      description:
        "Landing page and salary calculator for the United Services Union in Germany.",
      image: vrd,
      link: "https://vrd.de",
    },
    {
      id: 2,
      title: "Marketing agency homepage",
      description:
        "Completely redesigned the website and overhauled the content mangement system of a marketing agency based in Sweden.",
      image: bv,
      link: "https://brightvision.com",
    },
    {
      id: 3,
      title: "NFT mint landing page",
      description:
        "Landing page and Solidity smart contract to mint an ugly NFT collection. But hey, we're not here to judge.",
      image: df,
    },
  ];

  return (
    <section id="projects" className="projects">
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
                  Link
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .project-card {
          background: var(--color-secondary);
          border-radius: 2px;
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
