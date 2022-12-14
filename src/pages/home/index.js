import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";
///movie/now_playing?api_key=b570c746b0d07b381b44ff105cf96846&language=pt-BR
function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "b570c746b0d07b381b44ff105cf96846",
          language: "pt-br",
          page: 1,
        },
      });

      //console.log(response.data.results.slice(0, 10));

      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);

      console.log(filmes);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="carregando">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              ></img>
              <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
              <Link to={`/semelhantes/${filme.id}`}>
                Ver filmes semelhantes
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
