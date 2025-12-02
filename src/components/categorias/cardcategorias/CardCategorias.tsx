import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface Props {
  categoria: Categoria;
}

function CardCategoria({ categoria }: Props) {
  return (
    <div className="border bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-[#146C60]">{categoria.tipo}</h3>
      </div>

      <div className="flex justify-between mt-4">
        <Link
          to={`/categorias/editar/${categoria.id}`}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Editar
        </Link>

        <Link
          to={`/categorias/deletar/${categoria.id}`}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
