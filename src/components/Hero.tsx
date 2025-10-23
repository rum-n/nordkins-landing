import React from "react";
import { useTranslation } from "../i18n/useTranslation";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className={`hero-tagline`}>
        <h2>{t.hero.tagline}</h2>
      </div>
      <style>{`
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: left;
          margin-top: 100px;
        }

        .hero-tagline {
          max-width: 1000px;
        }

        .hero-tagline h2 {
          font-size: 4rem;
          font-weight: 300;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.9);
          text-align: left;
          margin: 0;
          letter-spacing: -0.02em;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 30vh;
            padding: 2rem 1.5rem;
          }

          .hero-tagline h2 {
            font-size: clamp(1.5rem, 6vw, 2.5rem);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
