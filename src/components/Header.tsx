import React from "react";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <h1 className="brand-title">NORDKINS</h1>
      <style>{`
        .main-header {
          width: 100%;
          text-align: center;
          position: relative;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          border: none;
          overflow: hidden;
        }

        .brand-title {
          position: fixed;
          font-family: 'Montserrat', sans-serif;
          font-size: 12rem;
          font-weight: 400;
          margin: 0;
          padding: 0;
          margin-top: -2.5rem;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          width: 100%;
          white-space: nowrap;
          overflow: visible;
        }

        @media (max-width: 768px) {
          .main-header {
            padding: 0 0.5rem 2rem;
          }

          .brand-title {
            font-size: 4rem;
          }

        }
      `}</style>
    </header>
  );
};

export default Header;
