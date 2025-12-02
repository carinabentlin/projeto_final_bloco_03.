import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";

import ListarProdutos from "./components/produtos/listarprodutos/ListarProdutos";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import DeletarProduto from "./components/produtos/deletarprodutos/DeletarProduto";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1">
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* CATEGORIAS */}
          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/categorias/cadastrar" element={<FormCategoria />} />
          <Route path="/categorias/editar/:id" element={<FormCategoria />} />
          <Route path="/categorias/deletar/:id" element={<DeletarCategoria />} />

          {/* PRODUTOS */}
          <Route path="/produtos" element={<ListarProdutos />} />
          <Route path="/produtos/cadastrar" element={<FormProduto />} />
          <Route path="/produtos/editar/:id" element={<FormProduto />} />
          <Route path="/produtos/deletar/:id" element={<DeletarProduto />} />

        </Routes>
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
