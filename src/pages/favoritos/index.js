import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    alert("FILME EXCUIDO COM SUCESSO " + id);
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

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
