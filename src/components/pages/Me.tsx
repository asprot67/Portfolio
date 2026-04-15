import { useState } from "react";
import "../styles/Me.css";



type Certification = {
  id: string;
  name: string;
  logo: string;
  description: string;
};

const certifications: Certification[] = [
  {
    id: "pix",
    name: "Certification PIX",
    logo: "./images/certifications/logoPIX.png",
    description:
      "La certification PIX évalue vos compétences numériques dans plusieurs domaines : sécurité, communication, création de contenu et gestion de données. Elle est reconnue par l’État français."
  },
  {
    id: "anssi",
    name: "Certification ANSSI – RGPD",
    logo: "./images/certifications/logoANSSI.jpg",
    description:
      "Formation délivrée par l’ANSSI pour sensibiliser aux risques liés à la cybersécurité et aux bonnes pratiques de protection."
  },
  
  {
    id: "rgpd",
    name: "Certification RGPD",
    logo: "./images/certifications/logoCNIL.png",
    description:
      "Attestation de sensibilisation au RGPD (Règlement Général sur la Protection des Données), expliquant les principes fondamentaux de la protection des données personnelles."
  }
];

export default function APropos() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleActive = (id: string) => {
    setActiveId(prev => (prev === id ? null : id)); // Si on reclique sur la même, elle se referme
  };

  return (
    <section id="a-propos">
      <h2>À propos de moi</h2>

      <div className="intro">
        <p>
          Je m’appelle <strong>Maxime Diebolt</strong> et je suis actuellement étudiant en
          <strong> deuxième année de BTS SIO</strong> (Services Informatiques aux Organisations)
          option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers).
        </p>

        <p>
          Passionné par le développement web, j’aime concevoir des sites et des applications
          modernes, intuitives et performantes. J’aime apprendre de nouvelles technologies et
          relever des défis techniques.
        </p>

        <p>
          Mon objectif est de poursuivre mes études dans le domaine du développement informatique
          et d’évoluer vers un poste de <strong>développeur full-stack</strong> ou
          <strong> ingénieur logiciel</strong>.
        </p>
      </div>

      <div className="competences">
        <h3>Mes compétences</h3>
        <ul>
          <li>Langages : HTML, CSS, JavaScript, PHP, Java, Kotlin, VBA, React </li>
          <li>Frameworks : Codeigniter4</li>
          <li>Bases de données : MySQL, SQLite</li>
          <li>Outils : Git, GitHub, Visual Studio Code</li>
          <li>Gestionnaire informatique : GLPI</li>
        </ul>
      </div>

      <div className="certifications">
        <h3>Mes certifications</h3>

        <div className="certification-grid">
          {certifications.map(cert => (
            <div
              key={cert.id}
              className={`cert-card ${activeId === cert.id ? "open" : ""}`}
              onClick={() => toggleActive(cert.id)}
            >
              <img src={cert.logo} alt={cert.name} />
              <p className="cert-name">{cert.name}</p>
              <div
                className={`cert-description-container ${
                  activeId === cert.id ? "show" : ""
                }`}
              >
                <p className="cert-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
