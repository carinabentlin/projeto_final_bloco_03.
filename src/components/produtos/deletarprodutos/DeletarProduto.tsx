import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../services/Service";

export default function DeletarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [produto, setProduto] = useState<Produto>();

  useEffect(() => {
    if (id) {
      buscar(`/produtos/${id}`, setProduto);
    }
  }, [id]);

  async function excluir() {
    await deletar(`/produtos/${id}`);
    navigate("/produtos");
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Excluir Produto</h1>

      <p className="mt-2">
        Tem certeza que deseja excluir:{" "}
        <strong>{produto?.nome}</strong>?
      </p>

      <button
        className="btn btn-danger w-full mt-4"
        onClick={excluir}
      >
        Confirmar Exclusão
      </button>
    </div>
  );
}
