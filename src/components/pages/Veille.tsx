import "../styles/Veille.css";
import RssFeed from "../RssFeed";

function Veille() {
  return (
    <div className="div">
      
      <h1>Veille Technologique</h1>
      <h3>Qu'est-ce que la veille technologique ?</h3>
      <p>La veille technologique, élément de la veille stratégique, consiste à surveiller les évolutions techniques, les innovations dans un secteur d’activité donnée. <br/>
        La veille technologique comprend notamment la surveillance, la collecte, le partage et la diffusion d’information permettant d’anticiper ou de s’informer sur des changements en matière de recherche,<br/>
         développement, brevet, lancement de nouveaux produits, matériaux, processus, concepts, innovation de fabrication, etc…. Cela a pour but d’évaluer l’impact sur l’environnement et l’organisation.</p><br/>
      <h3>Sujet de ma veille</h3>
      <p>Pourquoi et comment les entreprises adoptent-elles l’open source, et quels sont les enjeux associés ?</p>

       <RssFeed />
    </div>
  );
}

export default Veille;
