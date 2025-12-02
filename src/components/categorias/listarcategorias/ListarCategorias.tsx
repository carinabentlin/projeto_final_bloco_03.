import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategorias/CardCategorias";

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function carregarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (erro) {
      console.error("Erro ao buscar categorias:", erro);
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categorias.map((cat) => (
          <CardCategoria key={cat.id} categoria={cat} />
        ))}
      </div>
    </div>
  );
}

export default ListarCategorias;
