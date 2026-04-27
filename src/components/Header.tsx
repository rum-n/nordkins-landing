import React from "react";
import { useTranslation } from "../i18n/useTranslation";

const Header: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="brand-block" aria-label="Nordkins homepage">
          <span className="brand-name">NORDKINS</span>
          <span className="brand-descriptor">{t.header.descriptor}</span>
        </a>

        <div className="header-actions">
          <nav className="site-nav" aria-label="Primary">
            <a href="#services">{t.header.nav.services}</a>
            <a href="#work">{t.header.nav.work}</a>
            <a href="#contact">{t.header.nav.contact}</a>
          </nav>

          <div className="language-switcher" aria-label="Language switcher">
            <button
              type="button"
              className={language === "en" ? "is-active" : ""}
              onClick={() => setLanguage("en")}
            >
              {t.header.language.en}
            </button>
            <button
              type="button"
              className={language === "de" ? "is-active" : ""}
              onClick={() => setLanguage("de")}
            >
              {t.header.language.de}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .site-header {
          width: min(1120px, calc(100% - 3rem));
          margin: 0 auto;
          padding: 1.5rem 0 0;
        }

        .site-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 1.1rem 0 1rem;
          position: relative;
        }

        .site-header-inner::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            var(--color-accent) 0,
            rgba(143, 106, 47, 0.18) 22%,
            rgba(207, 215, 227, 0.55) 100%
          );
        }

        .brand-block {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          color: inherit;
        }

        .brand-name {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: var(--color-brand);
        }

        .brand-descriptor {
          font-size: 0.82rem;
          color: var(--color-muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .site-nav {
          display: flex;
          gap: 1.4rem;
        }

        .site-nav a {
          font-size: 0.94rem;
          color: var(--color-muted);
        }

        .site-nav a:hover {
          color: var(--color-brand);
        }

        .language-switcher {
          display: inline-flex;
          gap: 0.35rem;
          background: transparent;
        }

        .language-switcher button {
          border: none;
          border-radius: 999px;
          background: transparent;
          color: var(--color-muted);
          padding: 0.45rem 0.75rem;
          min-width: 3rem;
        }

        .language-switcher .is-active {
          background: rgba(239, 226, 201, 0.82);
          color: var(--color-brand);
        }

        @media (max-width: 768px) {
          .site-header {
            width: min(100% - 2rem, 1120px);
            padding-top: 1rem;
          }

          .site-header-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .header-actions {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .site-nav {
            flex-wrap: wrap;
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
