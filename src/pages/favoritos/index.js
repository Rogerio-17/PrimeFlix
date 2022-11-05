import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilme = filmes.filter((item) => {
      return item.id !== id;
    });
    toast.success("Filme excluido com sucesso");
    setFilmes(filtroFilme);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilme));
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>
      {filmes.length === 0 && <span>Você não tem nenhum filme salvo :(</span>}
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id} className="itens">
              <span>{item.title}</span>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              ></img>

              <div className="botoes">
                <button>
                  <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                </button>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
