import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/home";
import Filme from "./pages/filmes";
import Erro from "./pages/erro";
import Favoritos from "./pages/favoritos";
import Semelhantes from "./pages/semelhantes";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/semelhantes/:id" element={<Semelhantes />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
