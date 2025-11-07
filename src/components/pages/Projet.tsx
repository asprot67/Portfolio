import  { useState } from "react";
import "../styles/Projet.css";

type Projet = {
  id: string;
  titre: string;
  image: string;
  description: string;
  missions: string[];
  technologies: string[];
};

const projets: Projet[] = [
  {
    id: "p1",
    titre: "Projet 1",
    image: "/images/todo.png",
    description:
      "Test",
    missions: [
      "Test"
    ],
    technologies: []
  },
  {
    id: "p2",
    titre: "Projet 2",
    image: "/images/vitrine.png",
    description:
      "Test",
    missions: [
      "Test"
    ],
    technologies: []
  },
  {
    id: "p3",
    titre: "Projet 3",
    image: "/images/api.png",
    description:
      "Test",
    missions: [
      "Test"
    ],
    technologies: []
  }
];

export default function Projet() {
  const [projetActif, setProjetActif] = useState<Projet | null>(null);

  return (
    <section id="projets">
      <h2>Mes projets</h2>

      <div className="projet-grid">
        {projets.map((projet) => (
          <div
            key={projet.id}
            className="projet-card"
            onClick={() => setProjetActif(projet)}
          >
            <img src={projet.image} alt={projet.titre} className="projet-image" />
            <h3>{projet.titre}</h3>
          </div>
        ))}
      </div>

      {projetActif && (
        <div className="modal-overlay" onClick={() => setProjetActif(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l’intérieur
          >
            <button className="close-btn" onClick={() => setProjetActif(null)}>
              ✕
            </button>
            <img
              src={projetActif.image}
              alt={projetActif.titre}
              className="modal-image"
            />
            <h3>{projetActif.titre}</h3>
            <p>{projetActif.description}</p>

            <h4>Fonctionnalités principales :</h4>
            <ul>
              {projetActif.missions.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>

            <h4>Technologies utilisées :</h4>
            <div className="tech-list">
              {projetActif.technologies.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
