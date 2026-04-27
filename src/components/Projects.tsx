import React from "react";
import { useTranslation } from "../i18n/useTranslation";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="institutional-sections">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-kicker">{t.projects.sectorsTitle}</p>
          <h2>{t.projects.sectorsIntro}</h2>
        </div>
        <div className="sector-grid">
          {t.projects.sectors.map((sector) => (
            <article key={sector.title} className="sector-card">
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-shell services-shell">
        <div className="section-heading">
          <p className="section-kicker">{t.projects.servicesTitle}</p>
          <h2>{t.projects.servicesIntro}</h2>
        </div>
        <div className="services-grid">
          {t.projects.services.map((service, index) => (
            <article key={service.title} className="service-card">
              <span className="service-index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div id="work" className="section-shell work-shell">
        <div className="section-heading">
          <p className="section-kicker">{t.projects.workTitle}</p>
          <h2>{t.projects.workIntro}</h2>
        </div>
        <div className="work-grid">
          {t.projects.cases.map((project) => (
            <article key={project.title} className="work-card">
              <h3>{project.title}</h3>
              <p className="work-description">{project.description}</p>
              <p className="work-outcome">{project.outcome}</p>
              {"link" in project ? (
                <a
                  href={project.link}
                  className="work-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel}
                </a>
              ) : (
                <span className="work-label">{project.linkLabel}</span>
              )}
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .institutional-sections {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .section-shell {
          padding: 2.5rem 0 0;
          background: transparent;
        }

        .section-heading {
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: 1.5rem;
          align-items: start;
          margin-bottom: 2.25rem;
          padding-top: 1.25rem;
          position: relative;
        }

        .section-heading::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: min(100%, 7rem);
          height: 2px;
          background: var(--color-accent);
        }

        .section-kicker {
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 700;
          padding-top: 0.4rem;
        }

        .section-heading h2 {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          line-height: 1.25;
        }

        .sector-grid,
        .services-grid,
        .work-grid {
          display: grid;
          gap: 1rem;
        }

        .sector-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .services-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .work-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .sector-card,
        .service-card,
        .work-card {
          padding: 0 1.5rem 0 0;
          background: transparent;
          min-height: 100%;
          position: relative;
        }

        .sector-card::before,
        .service-card::before,
        .work-card::before {
          content: "";
          position: absolute;
          left: -1rem;
          top: 0.35rem;
          bottom: 0.35rem;
          width: 1px;
          background: linear-gradient(
            180deg,
            rgba(143, 106, 47, 0.35) 0,
            rgba(207, 215, 227, 0.15) 100%
          );
        }

        .sector-card h3,
        .service-card h3,
        .work-card h3 {
          font-size: 1.35rem;
          margin-bottom: 0.8rem;
        }

        .sector-card p,
        .service-card p,
        .work-card p {
          color: var(--color-muted);
          line-height: 1.75;
        }

        .service-index {
          display: inline-block;
          margin-bottom: 1rem;
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 700;
        }

        .work-description {
          margin-bottom: 1rem;
        }

        .work-outcome {
          padding-top: 1rem;
          position: relative;
          margin-bottom: 1.25rem;
        }

        .work-outcome::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 4rem;
          height: 1px;
          background: rgba(143, 106, 47, 0.45);
        }

        .work-link,
        .work-label {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--color-accent);
        }

        @media (max-width: 900px) {
          .section-shell {
            padding: 1.75rem 0 0;
          }

          .section-heading {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .sector-grid,
          .services-grid,
          .work-grid {
            grid-template-columns: 1fr;
          }

          .sector-card,
          .service-card,
          .work-card {
            padding-right: 0;
            padding-left: 1rem;
          }

          .sector-card::before,
          .service-card::before,
          .work-card::before {
            left: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
