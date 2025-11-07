import { useState } from "react";
import "../styles/Stage.css";

type Stage = {
  id: string;
  entreprise: string;
  logo: string;
  titre: string;
  duree: string;
  periode: string;
  description: string;
  missions: string[];
  technologies: string[];
  categorie: "BTS" | "BacPro";
};

const stages: Stage[] = [
  // 🎓 === STAGES BTS ===
  {
    id: "stage-bts2",
    entreprise: "Mairie de Haguenau",
    logo: "./images/stages/logoHAG.png",
    titre: "Stage Dev Web - Mairie Haguenau",
    duree: "A venir ",
    periode: "A venir",
    description:
      "N/A",
    missions: [
      "N/A"
    ],
    technologies: [],
    categorie: "BTS"
  },
  {
    id: "stage-bts1",
    entreprise: "Société Alscaienne de Ramonage",
    logo: "./images/stages/logoSAR.jpg",
    titre: "Stage Dev App - Société Alscaienne de Ramonag",
    duree: "5 semaines",
    periode: "Juin - Juillet 2025",
    description:
      "Création d'une application mobile Android pour l'affichage de la réglementation liée au ramonage.",
    missions: [
      "Conception de la base de données",
      "Développement d’une interface utilisateur",
    ],
    technologies: ["Kotlin", "Android Studio", "SQLite ", "SQL"],
    categorie: "BTS"
  },

  // 🏫 === STAGES BAC PRO ===
  {
    id: "stage-bp2",
    entreprise: "Tryba",
    logo: "./images/stages/logoTryba.png",
    titre: "Stage Technicien informatique - Tryba",
    duree: "7 semaines",
    periode: "Mars - Avril 2021",
    description:
      "Stage réalisé dans un atelier de réparation et de maintenance informatique. J’y ai appris à diagnostiquer, démonter et réinstaller des systèmes d’exploitation.",
    missions: [
      "Dépannage matériel et logiciel sur ordinateurs clients",
      "Installation de systèmes Windows et Linux",
      "Assistance à la clientèle sur site"
    ],
    technologies: ["Windows", "Linux", "Réseaux", "Matériel PC"],
    categorie: "BacPro"
  },
  {
    id: "stage-bp1",
    entreprise: "IMD informatique",
    logo: "./images/stages/logoIMD.svg",
    titre: "Stage réparateur informatique",
    duree: "8 semaines",
    periode: "Novembre - Décembre 2021",
    description:
      "Réparation de materiel informatique en Hardware et Software",
    missions: [
      "Réparations PC ",
      "Réparations Imprimante ",
      "Réparation Téléphone"
    ],
    technologies: ["Windows","Linux"],
    categorie: "BacPro"
  }
];

export default function Stage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleActive = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  const stagesBTS = stages.filter(stage => stage.categorie === "BTS");
  const stagesBacPro = stages.filter(stage => stage.categorie === "BacPro");

  const renderStages = (data: Stage[]) => (
    <div className="stage-list">
      {data.map(stage => (
        <div
          key={stage.id}
          className={`stage-card ${activeId === stage.id ? "open" : ""}`}
          onClick={() => toggleActive(stage.id)}
        >
          <img src={stage.logo} alt={stage.entreprise} className="stage-logo" />
          <h3>{stage.titre}</h3>
          <p className="stage-periode">
            {stage.periode} — {stage.duree}
          </p>

          <div className={`stage-details ${activeId === stage.id ? "show" : ""}`}>
            <p className="stage-description">{stage.description}</p>

            <h4>Missions principales :</h4>
            <ul>
              {stage.missions.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </ul>

            <h4>Technologies utilisées :</h4>
            <div className="technologies">
              {stage.technologies.map((tech, index) => (
                <span key={index} className="tech">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="stages">
      <h2>Mes stages</h2>

      <div className="categorie">
        <h3>Stages effectués en BTS</h3>
        {renderStages(stagesBTS)}
      </div>

      <div className="categorie">
        <h3>Stages effectués en Bac Pro</h3>
        {renderStages(stagesBacPro)}
      </div>
    </section>
  );
}
