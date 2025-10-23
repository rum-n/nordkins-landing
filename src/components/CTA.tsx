import React from "react";
import { useTranslation } from "../i18n/useTranslation";

const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-glow"></div>
        <h2 className="cta-title">{t.cta.title}</h2>
        <p className="cta-description">{t.cta.description}</p>
        <button className="cta-button">
          {t.cta.button}
          <span className="cta-arrow">→</span>
        </button>
      </div>
      <style>{`
        .cta-section {
          position: relative;
          padding: 8rem 2rem !important;
          overflow: hidden;
        }

        .cta-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          animation: scaleIn 0.8s ease-out;
          backdrop-filter: blur(10px);
        }

        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(22, 158, 215, 0.3) 0%, transparent 70%);
          filter: blur(60px);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        .cta-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .cta-description {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 3rem;
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .cta-button {
          position: relative;
          z-index: 1;
          padding: 1.2rem 3rem;
          font-size: 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: 50px;
          animation: fadeInUp 0.8s ease-out 0.6s both;
          border: none;
          box-shadow: 0 10px 30px rgba(0, 191, 255, 0.4);
        }

        .cta-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
          font-size: 1.5rem;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(5px);
        }

        .cta-button:hover {
          box-shadow: 0 15px 40px rgba(0, 191, 255, 0.6);
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 4rem 1.5rem !important;
          }

          .cta-container {
            padding: 3rem 2rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-description {
            font-size: 1.1rem;
          }

          .cta-button {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
