import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/option/Footer";

// Import des pages
import Home from "./components/pages/Home";
import Me from "./components/pages/Me";
import Stage from "./components/pages/Stage";
import Projet from "./components/pages/Projet";
import Contact from "./components/pages/Contact";
import Veille from "./components/pages/Veille";


export default function App() {
  // State pour le composant actif, initialisé sur "Home"
  const [activeComponent, setActiveComponent] = useState("Home");

  console.log("Composant actif :", activeComponent);

  return (
    <div className="app">
      {/* Navbar unique, qui contrôle le state */}
      <Navbar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />

      {/* Rendu conditionnel des pages */}
      <main className="content">
        {activeComponent === "Home" && <Home />}
        {activeComponent === "Me" && <Me />}
        {activeComponent === "Stage" && <Stage />}
        {activeComponent === "Projet" && <Projet />}
        {activeComponent === "Veille" && <Veille />}
        {activeComponent === "Contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
