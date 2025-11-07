import "../styles/Home.css";

function Home() {
  return (
    <section id="home">
      <p>v0.5 du site</p>
  <h1>Bonjour, Je suis <span>Maxime Diebolt </span></h1>

  <p>
    Je suis étudiant en deuxième année de <strong>BTS SIO</strong> (Services Informatiques aux Organisations),
    spécialité développement. Passionné par la programmation, j’aime concevoir des applications modernes, claires
    et efficaces, en mettant l’accent sur l’expérience utilisateur et la qualité du code.
  </p>

  <p>
    <strong>Mon objectif :</strong> continuer à progresser dans le développement front-end et acquérir de nouvelles
    compétences pour devenir un développeur complet. J’aime apprendre, relever des défis techniques et travailler
    sur des projets concrets qui ont du sens.
  </p>

  <section id="skills">
    <h2>Compétences principales</h2>
    <ul>
      <li>Développement web avec <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>React</strong></li>
      <li>Utilisation de <strong>Node.js</strong>, <strong>Git</strong> et <strong>GitHub</strong></li>
      <li>Gestion de bases de données avec <strong>MySQL</strong></li>
      <li>Conception et modélisation avec <strong>Merise</strong> et <strong>UML</strong></li>
    </ul>
  </section>

  <section id="projects">
    <h2>Projets récents</h2>
    <ul>
      <li>Un site vitrine développé avec React</li>
      <li>Une application de gestion d’utilisateurs avec base de données MySQL</li>
      <li>Des maquettes d’interfaces réalisées avec Figma</li>
    </ul>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>
      Je suis actuellement à la recherche d’une alternance ou d’un stage pour approfondir mes compétences et
      mettre en pratique mes connaissances. N’hésite pas à me contacter pour échanger ou collaborer sur un projet !
    </p>
  </section>
</section>

  );
}

export default Home;