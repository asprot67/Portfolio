import "../styles/Home.css";

function Home() {
  return (
    <section id="home">
  <h1>Bonjour, Je suis <span>Maxime Diebolt </span></h1>
<h2
  style={{
    width: "750px",
    height: "75px",
    padding: "20px",
    border: "5px solid #333",
    margin: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px"
  }}
>
  Recherche d'une alternance pour mon Bachelor concepteur développeur d’applications 3ème année
</h2>
<br />
  <p>
    Je suis étudiant en deuxième année de <strong>BTS SIO</strong> (Services Informatiques aux Organisations),
    spécialité développement. Passionné par la programmation, j’aime concevoir des applications modernes, claires
    et efficaces, en mettant l’accent sur l’expérience utilisateur et la qualité du code.
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