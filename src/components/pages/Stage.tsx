import { useState } from "react";
import "../styles/Stage.css";

type Stage = {
  id: string;
  entreprise: string;
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
    titre: "Stage Dev Web - Mairie Haguenau",
    duree: "5 semaines",
    periode: "Janvier - Février 2026",
    description:
      "Developpement d'une web app pour la gestion des reservation de materiels",
    missions: [
      "Conception de l'architecture de l'application",
      "Développement des fonctionnalités principales",
      "Tests et corrections de bugs"
    ],
    technologies: ["PHP", "CodeIgniter4", "MySQL", "HTML/CSS", "JavaScript"],
    categorie: "BTS"
  },
  {
    id: "stage-bts1",

    entreprise: "Société Alsacienne de Ramonage",
    titre: "Stage Dev App - Société Alsacienne de Ramonage",
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
