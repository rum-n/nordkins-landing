import React from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />
        <main>
          <Hero />
          <Projects />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
