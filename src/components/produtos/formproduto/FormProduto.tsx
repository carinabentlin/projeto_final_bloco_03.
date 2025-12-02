import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";

import { buscar, cadastrar, atualizar } from "../../../services/Service";

export default function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    foto: "",
    categoria: categoria,
  });

  useEffect(() => {
    if (id) {
      buscar(`/produtos/${id}`, setProduto);
    }
  }, [id]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault();

    if (id) {
      await atualizar("/produtos", produto);
    } else {
      await cadastrar("/produtos", produto);
    }

    navigate("/produtos");
  }

  return (
    <form
      onSubmit={enviar}
      className="p-6 max-w-lg mx-auto space-y-4"
    >

      <input
        type="text"
        name="nome"
        value={produto.nome}
        placeholder="Nome do produto"
        onChange={atualizarEstado}
        className="input"
      />

      <input
        type="number"
        name="preco"
        value={produto.preco}
        placeholder="Preço"
        onChange={atualizarEstado}
        className="input"
      />

      <input
        type="text"
        name="foto"
        value={produto.foto}
        placeholder="URL da foto"
        onChange={atualizarEstado}
        className="input"
      />

      <input
        type="number"
        name="categoria"
        placeholder="ID da categoria"
        onChange={(e) =>
          setProduto({
            ...produto,
            categoria: {
              ...produto.categoria,
              id: Number(e.target.value),
            },
          })
        }
        className="input"
      />

      <button
        type="submit"
        className="btn btn-primary w-full"
      >
        {id ? "Atualizar Produto" : "Cadastrar Produto"}
      </button>
    </form>
  );
}
