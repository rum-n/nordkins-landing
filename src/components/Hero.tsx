import React from "react";
import { useTranslation } from "../i18n/useTranslation";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="top" className="hero">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <a href="#contact" className="hero-button hero-button-primary">
              {t.hero.primaryCta}
            </a>
            <a href="#work" className="hero-button hero-button-secondary">
              {t.hero.secondaryCta}
            </a>
          </div>

          <ul className="hero-highlights">
            {t.hero.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="hero-image-wrap" aria-hidden="true">
          <img className="hero-image" src="/de-hero.jpg" alt="" />
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 1rem;
        }

        .hero-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.9fr);
          gap: 2rem;
          align-items: start;
        }

        .hero-copy {
          padding: 3rem 0 2rem;
        }

        .hero-eyebrow {
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero h1 {
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          line-height: 1.02;
          max-width: 19ch;
          margin-bottom: 1.25rem;
        }

        .hero-description {
          font-size: 1.12rem;
          line-height: 1.8;
          color: var(--color-muted);
          max-width: 58ch;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 2rem 0;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3rem;
          padding: 0.8rem 1.3rem;
          border: 1px solid var(--color-brand);
          font-weight: 600;
        }

        .hero-button-primary {
          background: var(--color-brand);
          color: white;
        }

        .hero-button-primary:hover {
          color: white;
          background: var(--color-brand-soft);
        }

        .hero-button-secondary {
          color: var(--color-brand);
          background: transparent;
        }

        .hero-highlights {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-top: 1.5rem;
          position: relative;
        }

        .hero-highlights::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 5rem;
          height: 1px;
          background: var(--color-accent);
        }

        .hero-highlights li {
          padding: 0.15rem 0 0.15rem 1rem;
          position: relative;
          color: var(--color-brand);
          font-size: 0.94rem;
          background: transparent;
        }

        .hero-highlights li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 0.4rem;
          height: 0.4rem;
          transform: translateY(-50%);
          border-radius: 999px;
          background: var(--color-accent);
        }

        .hero-image-wrap {
          position: relative;
          min-height: 33rem;
          overflow: hidden;
          align-self: stretch;
        }

        .hero-image-wrap::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(237, 241, 245, 1) 0%,
            rgba(237, 241, 245, 0.94) 10%,
            rgba(237, 241, 245, 0.7) 18%,
            rgba(237, 241, 245, 0.28) 30%,
            rgba(237, 241, 245, 0) 58%
          );
          z-index: 1;
          pointer-events: none;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 900px) {
          .hero-panel {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            padding: 1.5rem 0;
          }

          .hero-image-wrap {
            min-height: 18rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
