import React from "react";

const Footer: React.FC = () => {
  const tickerText =
    "Let's create something awesome together • Get in touch at contact@nordkins.com • ";

  return (
    <footer className="footer-ticker">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {tickerText}
          {tickerText}
          {tickerText}
          {tickerText}
        </div>
      </div>
      <style>{`
        .footer-ticker {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 10px;
          background:rgb(19, 91, 167);
          z-index: 1000;
          overflow: hidden;
          padding: 1.5rem 0;
          text-transform: uppercase;
        }

        .ticker-wrapper {
          height: 100%;
          display: flex;
          align-items: center;
        }

        .ticker-content {
          display: inline-block;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
          font-size: 0.8rem;
          color: var(--color-text);
          letter-spacing: 0.05em;
        }

        @keyframes ticker {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .footer-ticker {
            height: 20px;
          }

          .ticker-content {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
