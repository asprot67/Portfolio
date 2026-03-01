import { useEffect, useState } from "react";

type Article = {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  description?: string;
};

function RssFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://www.zdnet.com/topic/open-source/rss.xml"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement…</p>;

  return (
   <section>
  <h2>📰 Veille Open Source</h2>

  <ul className="rss-list">
    {articles.slice(0, 5).map((article) => (
      <li className="rss-card" key={article.guid}>
        {/* Titre cliquable */}
        <a
          href={article.link}
          target="_blank"
          rel="noreferrer"
          className="rss-title"
        >
          {article.title}
        </a>

        {/* Date lisible */}
        <p className="rss-date">
          {new Date(article.pubDate).toLocaleDateString()}
        </p>

        {/* Extrait / description */}
        <p className="rss-description">
          {article.description?.slice(0, 150)}…
        </p>

      </li>
    ))}
  </ul>
</section>
  );
}

export default RssFeed;