import { useState } from "react";
import "./Navbar.css";

type NavbarProps = {
  activeComponent: string;
  setActiveComponent: (page: string) => void;
};

export default function Navbar({ activeComponent, setActiveComponent }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (page: string) => {
    setActiveComponent(page);
    setMenuOpen(false); // ferme le menu en mobile
  };

  return (
    <header className="nav-header">
      <nav className="nav">
        <h1 className="nav-logo" onClick={() => handleClick("Home")}>
          Diebolt Maxime
        </h1>

        {/* Burger */}
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className={activeComponent === "Home" ? "active" : ""} onClick={() => handleClick("Home")}>
            Accueil
          </li>

          <li className={activeComponent === "Me" ? "active" : ""} onClick={() => handleClick("Me")}>
            À propos
          </li>

          <li className={activeComponent === "Stage" ? "active" : ""} onClick={() => handleClick("Stage")}>
            Stage
          </li>

          <li className={activeComponent === "Projet" ? "active" : ""} onClick={() => handleClick("Projet")}>
            Projet
          </li>

          <li className={activeComponent === "Veille" ? "active" : ""} onClick={() => handleClick("Veille")}>
            Veille Techno
          </li>

          <li className={activeComponent === "Contact" ? "active" : ""} onClick={() => handleClick("Contact")}>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}