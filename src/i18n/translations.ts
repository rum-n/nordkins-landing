export const translations = {
  en: {
    hero: {
      tagline:
        "Partnering with ambitious founders to craft exceptional digital experiences",
    },
    projects: {
      clientTitle: "Client projects",
      internalTitle: "Internal projects",
      vrd: {
        title: "Landing page and salary calculator",
        description:
          "Landing page and salary calculator for the United Services Union in Germany.",
      },
      bv: {
        title: "Marketing agency homepage",
        description:
          "Completely redesigned the website and overhauled the content management system of a marketing agency based in Sweden.",
      },
      df: {
        title: "NFT mint landing page",
        description:
          "Landing page and Solidity smart contract to mint an ugly NFT collection. But hey, we're not here to judge.",
      },
      rjm: {
        title: "Remote Job Matching",
        description:
          "A platform to help people find remote job opportunities with some LLM sprinkled in.",
      },
      devf: {
        title: "Devjob Flashcards",
        description:
          "A platform to help people practice for AI coding interviews.",
      },
      link: "Link",
    },
    cta: {
      title: "Let's Build Something Cool Together",
      description:
        "Ready to transform your ideas into reality? Let's create something extraordinary.",
      button: "Start Your Project",
    },
    footer: {
      ticker:
        "Let's create something awesome together • Get in touch at contact@nordkins.com • ",
    },
  },
  de: {
    hero: {
      tagline:
        "Gemeinsam mit ambitionierten Gründern außergewöhnliche digitale Erlebnisse schaffen",
    },
    projects: {
      clientTitle: "Kundenprojekte",
      internalTitle: "Interne Projekte",
      vrd: {
        title: "Landing Page und Gehaltsrechner",
        description:
          "Landing Page und Gehaltsrechner für die Vereinte Dienstleistungsgewerkschaft in Deutschland.",
      },
      bv: {
        title: "Marketing-Agentur Homepage",
        description:
          "Komplette Neugestaltung der Website und Überarbeitung des Content-Management-Systems einer schwedischen Marketing-Agentur.",
      },
      df: {
        title: "NFT Mint Landing Page",
        description:
          "Landing Page und Solidity Smart Contract für eine hässliche NFT-Kollektion. Aber hey, wir urteilen nicht.",
      },
      rjm: {
        title: "Remote Job Matching",
        description:
          "Eine Plattform, um Menschen bei der Suche nach Remote-Jobs zu helfen, mit etwas KI verfeinert.",
      },
      devf: {
        title: "Devjob Lernkarten",
        description:
          "Eine Plattform, um sich auf KI-gestützte Coding-Interviews vorzubereiten.",
      },
      link: "Link",
    },
    cta: {
      title: "Lass uns gemeinsam etwas Cooles bauen",
      description:
        "Bereit, deine Ideen in die Realität umzusetzen? Lass uns etwas Außergewöhnliches erschaffen.",
      button: "Projekt starten",
    },
    footer: {
      ticker:
        "Lassen Sie uns gemeinsam etwas Tolles schaffen • Kontaktieren Sie uns unter contact@nordkins.com • ",
    },
  },
};

export type Language = keyof typeof translations;
