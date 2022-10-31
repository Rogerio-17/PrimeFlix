import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/home";
import Filme from "./pages/filmes";
import Erro from "./pages/erro";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
