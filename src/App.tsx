import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* CATEGORIAS */}
        <Route path="/categorias" element={<ListarCategorias />} />
        <Route path="/categorias/cadastrar" element={<FormCategoria />} />
        <Route path="/categorias/editar/:id" element={<FormCategoria />} />
        <Route path="/categorias/deletar/:id" element={<DeletarCategoria />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
