import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
