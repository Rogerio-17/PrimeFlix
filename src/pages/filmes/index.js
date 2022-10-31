import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "b570c746b0d07b381b44ff105cf96846",
            language: "pt-BR",
          },
        })
        //se der certo
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })

        //se der errado
        .catch(() => {
          console.log("filme não encontrado");
        });
    }
    loadFilme();

    return () => {
      console.log("componente foi desmontado");
    };
  }, []);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
    </div>
  );
}

export default Filme;
