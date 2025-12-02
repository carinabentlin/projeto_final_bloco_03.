import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";

interface Props {
  produto: Produto;
}

export default function CardProdutos({ produto }: Props) {
  return (
    <div className="shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition">

      <img
        src={produto.foto}
        alt={produto.nome}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-3">{produto.nome}</h2>

      <p className="text-indigo-700 font-semibold">
        R$ {Number(produto.preco).toFixed(2)}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Categoria: {produto.categoria?.nome}
      </p>

      <div className="flex justify-between mt-4">
        <Link
          to={`/produtos/editar/${produto.id}`}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Editar
        </Link>

        <Link
          to={`/produtos/deletar/${produto.id}`}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Deletar
        </Link>
      </div>

    </div>
  );
}
