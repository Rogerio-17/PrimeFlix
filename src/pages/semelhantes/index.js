import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./semelhantes.css";
import { Link } from "react-router-dom";

function Semelhantes() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(`movie/${id}/similar`, {
        params: {
          api_key: "b570c746b0d07b381b44ff105cf96846",
          language: "pt-br",
          page: 1,
        },
      });

      //console.log(response.data.results.slice(0, 10));

      setFilmes(response.data.results.slice(0, 5));
      setLoading(false);
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
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Semelhantes;
