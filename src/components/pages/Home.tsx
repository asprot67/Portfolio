import "../styles/Home.css";

function Home() {
  return (
    <section id="home">
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
    <h2>Compétences utilisées récemment</h2>
    <ul>
      <li>Développement web : <strong>PHP</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>React</strong></li>
      <li>FrameWork : <strong>CodeIgniter4</strong></li>
      <li>Gestion de bases de données avec <strong>MySQL</strong></li>
    </ul>
  </section>

  <section id="projects">
    <h2>Projets récents</h2>
    <ul>
      <li>Une application de gestion de réservation de matériel avec base de données</li>
      <li>Projet BTS : Suivie de plainte interne</li>
      <li>Portfolio</li>
    </ul>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>
      Je suis actuellement à la recherche d’une alternance pour l'année 2026 pour approfondir mes compétences et
      mettre en pratique mes connaissances. N’hésite pas à me contacter pour échanger ou collaborer sur un projet !
    </p>
  </section>
</section>

  );
}

export default Home;