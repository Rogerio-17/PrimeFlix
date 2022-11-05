import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.css";
import api from "../../services/api";
import { toast } from "react-toastify";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

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
          navigation("/", { replace: true });
          return;
        });
    }
    loadFilme();

    return () => {
      console.log("componente foi desmontado");
    };
  }, [navigation, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.error("Filme já está salvo");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

      <div className="area-botao">
        <button onClick={salvarFilme}>Salvar</button>

        <button>
          <a
            href={`https://youtube.com/results?search_query=${filme.title}`}
            target="blank"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
