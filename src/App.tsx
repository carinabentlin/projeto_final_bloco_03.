import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      {/* AQUI É O SEGREDO */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/categorias/cadastrar" element={<FormCategoria />} />
          <Route path="/categorias/editar/:id" element={<FormCategoria />} />
          <Route path="/categorias/deletar/:id" element={<DeletarCategoria />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
