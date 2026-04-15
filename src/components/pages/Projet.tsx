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

const baseUrl = import.meta.env.BASE_URL || '/';

const projets: Projet[] = [
  {
    id: "p1",
    titre: "Portflio",
    image: `${baseUrl}images/projet/portfolio.png`,
    description:
      "Création de mon portfolio personnel pour présenter mes compétences, mes expériences et mes projets. Le site est conçu pour être moderne, responsive et facile à naviguer.",
    missions: [
      "Présentation de mes compétences et expériences",
    ],
    technologies: ['React', 'TypeScript', 'CSS']
  },
  {
    id: "p2",
    titre: "Projet BTS : Suivie de plainte interne",
    image: `${baseUrl}images/projet/suivie_plainte.png`,
    description:
      "Application web permettant de faire des dépôts de plaintes internes (anonyme ou non anonyme) et d'avoir un suivi en tant que signaleurs . Web App présenté lors d'une de mes épreuve du BTS et continuer de mon coté pour l'améliorer. Développement en cours.",
      
    missions: [
      "Depot de plainte",
      "Suivie de l'état de la plainte",
      "Gestion des utilisateurs",
      "Système messagerie interne"
    ],
    technologies: ['PHP','HTML','CSS','JavaScript']
  },
  
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
