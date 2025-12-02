import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategorias/CardCategorias";

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);

  async function carregarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (erro) {
      console.error("Erro ao buscar categorias:", erro);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarCategorias();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#146C60]">
        Categorias
      </h2>

      {/* BOTÃO NOVA CATEGORIA */}
      <div className="flex justify-center mb-6">
        <Link
          to="/categorias/cadastrar"
          className="bg-[#146C60] hover:bg-[#0f5046] text-white px-4 py-2 rounded-md shadow"
        >
          + Nova Categoria
        </Link>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500 text-lg">Carregando...</p>
      )}

      {/* LISTA VAZIA */}
      {!loading && categorias.length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          Nenhuma categoria cadastrada ainda.
        </p>
      )}

      {/* GRID DE CATEGORIAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categorias.map((cat) => (
          <CardCategoria key={cat.id} categoria={cat} />
        ))}
      </div>
    </div>
  );
}

export default ListarCategorias;
