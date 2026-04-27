import React from "react";
import { useTranslation } from "../i18n/useTranslation";

const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="cta-section">
      <div className="cta-panel">
        <div className="cta-copy">
          <p className="cta-kicker">{t.header.nav.contact}</p>
          <h2>{t.cta.title}</h2>
          <p>{t.cta.description}</p>
        </div>
        <div className="cta-actions">
          <a className="cta-button" href={`mailto:${t.cta.emailLabel}`}>
            {t.cta.button}
          </a>
          <a className="cta-email" href={`mailto:${t.cta.emailLabel}`}>
            {t.cta.emailLabel}
          </a>
        </div>
      </div>

      <style>{`
        .cta-section {
          padding: 0;
        }

        .cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.8fr);
          gap: 2rem;
          padding: 2.5rem;
          background: var(--color-brand);
          color: white;
          box-shadow: var(--shadow-soft);
        }

        .cta-kicker {
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          font-weight: 700;
          margin-bottom: 0.9rem;
        }

        .cta-copy h2 {
          font-size: clamp(1.9rem, 4vw, 3rem);
          margin-bottom: 1rem;
          line-height: 1.15;
        }

        .cta-copy p {
          max-width: 62ch;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.8;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3rem;
          padding: 0.85rem 1.3rem;
          background: var(--color-accent);
          color: white;
          font-weight: 700;
          border-radius: 999px;
        }

        .cta-button:hover {
          color: white;
          opacity: 0.92;
        }

        .cta-email {
          color: rgba(255, 255, 255, 0.82);
          font-weight: 500;
        }

        .cta-email:hover {
          color: white;
        }

        @media (max-width: 900px) {
          .cta-panel {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
