import React from "react";
import { useTranslation } from "../i18n/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-statement">{t.footer.statement}</p>
        <div className="footer-meta">
          {/* <p>
            <span>{t.footer.contactLabel}</span>
            <a href={`mailto:${t.cta.emailLabel}`}>{t.cta.emailLabel}</a>
          </p> */}
          <p>
            <span>{t.footer.focusLabel}</span>
            {t.footer.focusValue}
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          width: min(1120px, calc(100% - 3rem));
          margin: 0 auto;
          padding: 0 0 2.5rem;
        }

        .site-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          padding-top: 1.5rem;
          position: relative;
        }

        .site-footer-inner::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: min(100%, 7rem);
          height: 1px;
          background: rgba(143, 106, 47, 0.5);
        }

        .footer-statement {
          max-width: 36ch;
          color: var(--color-muted);
          line-height: 1.7;
        }

        .footer-meta {
          display: grid;
          gap: 0.8rem;
          max-width: 40ch;
        }

        .footer-meta p {
          color: var(--color-muted);
          line-height: 1.7;
        }

        .footer-meta span {
          display: block;
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        @media (max-width: 768px) {
          .site-footer {
            width: min(100% - 2rem, 1120px);
          }

          .site-footer-inner {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
